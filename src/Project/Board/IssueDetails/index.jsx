import React, { Fragment } from 'react';

import api from 'shared/utils/api';
import useApi from 'shared/hooks/api';
import { AboutTooltip, Button, CopyLinkButton, PageError } from 'shared/components';

import Loader from './Loader';
import Type from './Type';
import Delete from './Delete';
import Title from './Title';
import Description from './Description';
import Status from './Status';
import AssigneesReporter from './AssigneesReporter';
import Priority from './Priority';
import EstimateTracking from './EstimateTracking';
import Dates from './Dates';
import { Content, Left, Right, TopActions, TopActionsRight } from './Styles';
import Comments from './Comments';

const ProjectBoardIssueDetails = ({
  issueId,
  projectUsers,
  fetchProject,
  updateLocalProjectIssues,
  modalClose,
}) => {
  const [{ data, error, setLocalData }, fetchIssue] = useApi.get(`/issues/${issueId}`);
  if (!data) return <Loader />;
  if (error) return <PageError />;

  const updateLocalIssueDetails = fields =>
    setLocalData(currentData => ({ issue: { ...currentData.issue, ...fields } }));

  const updateIssue = updatedFields => {
    api.optimisticUpdate(`/issues/${issueId}`, {
      updatedFields,
      currentFields: data,
      setLocalData: fields => {
        updateLocalIssueDetails(fields);
        updateLocalProjectIssues(data.id, fields);
      },
    });
  };

  return (
    <Fragment>
      <TopActions>
        <Type issue={data} updateIssue={updateIssue} />
        <TopActionsRight>
          <AboutTooltip
            renderLink={linkProps => (
              <Button icon="feedback" variant="empty" {...linkProps}>
                Give feedback
              </Button>
            )}
          />
          <CopyLinkButton variant="empty" />
          <Delete issue={data} fetchProject={fetchProject} modalClose={modalClose} />
          <Button icon="close" iconSize={24} variant="empty" onClick={modalClose} />
        </TopActionsRight>
      </TopActions>
      <Content>
        <Left>
          {data && <Title issue={data} updateIssue={updateIssue} />}
          {data && <Description issue={data.description} updateIssue={updateIssue} />}

          {data && <Comments issue={data} fetchIssue={fetchIssue} />}
        </Left>
        <Right>
          <Status issue={data} updateIssue={updateIssue} />
          <AssigneesReporter issue={data} updateIssue={updateIssue} projectUsers={projectUsers} />
          <Priority issue={data} updateIssue={updateIssue} />
          <EstimateTracking issue={data} updateIssue={updateIssue} />
          <Dates issue={data} />
        </Right>
      </Content>
    </Fragment>
  );
};

export default ProjectBoardIssueDetails;
