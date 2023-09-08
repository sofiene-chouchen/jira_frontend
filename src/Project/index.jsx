/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Redirect, Route, useHistory, useRouteMatch } from 'react-router-dom';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useApi from 'shared/hooks/api';
import { updateArrayItemById } from 'shared/utils/javascript';
import { createQueryParamModalHelpers } from 'shared/utils/queryParamModal';
import { Modal, PageError, PageLoader } from 'shared/components';

import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';
import Board from './Board';
import IssueSearch from './IssueSearch';
import IssueCreate from './IssueCreate';
import ProjectSettings from './ProjectSettings';
import { ProjectPage } from './Styles';

const Project = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [{ data, error, setLocalData }, fetchProject] = useApi.get(`/project/${id}`);
  useEffect(() => {
    if (data) {
      setProject(data);
    }
  }, [data]);

  useEffect(() => {}, [project]);

  const issueSearchModalHelpers = createQueryParamModalHelpers('issue-search');
  const issueCreateModalHelpers = createQueryParamModalHelpers('issue-create');

  if (!data) return <PageLoader />;
  if (error) return <PageError />;

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setLocalData(currentData => {
      return {
        project: {
          ...currentData,
          issues: updateArrayItemById(currentData.issues, issueId, updatedFields),
        },
      };
    });
  };

  return (
    <ProjectPage>
      <NavbarLeft
        issueSearchModalOpen={issueSearchModalHelpers.open}
        issueCreateModalOpen={issueCreateModalHelpers.open}
      />

      {project && <Sidebar project={project} />}

      {issueSearchModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-search"
          variant="aside"
          width={600}
          onClose={issueSearchModalHelpers.close}
          renderContent={() => {
            project && <IssueSearch project={project} />;
          }}
        />
      )}

      {issueCreateModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-create"
          width={800}
          withCloseIcon={false}
          onClose={issueCreateModalHelpers.close}
          renderContent={modal =>
            project && (
              <IssueCreate
                project={project}
                fetchProject={fetchProject}
                onCreate={() => history.push(`${match.url}/board`)}
                modalClose={modal.close}
              />
            )
          }
        />
      )}

      <Route
        path={`${match.path}/board`}
        render={() =>
          project && (
            <Board
              project={project}
              fetchProject={fetchProject}
              updateLocalProjectIssues={updateLocalProjectIssues}
            />
          )
        }
      />

      <Route
        path={`${match.path}/settings`}
        render={() => <ProjectSettings project={project} fetchProject={fetchProject} />}
      />

      {match.isExact && <Redirect to={`${match.url}/board`} />}
    </ProjectPage>
  );
};

export default Project;
