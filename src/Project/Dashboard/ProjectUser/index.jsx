import React from 'react';
import jwt from 'jwt-decode';
import { Link } from 'react-router-dom';
import useApi from 'shared/hooks/api';
import { PageLoader } from 'shared/components';
import { getStoredAuthToken } from '../../../shared/utils/authToken';
import image from '../../../images/bag.png';
import {
  Button,
  Container,
  Header,
  Image,
  NoProject,
  NUmbe,
  NumberOfIssue,
  ProjectCart,
  ProjectList,
  ProjectName,
  Projects,
  SubName,
  TextDeco,
  TextHeader,
  Title,
} from './Style';

export default function ProjectUser() {
  const token = getStoredAuthToken('authToken');
  const user = jwt(token);
  const [data, error] = useApi.get('/project');
  const projects = data.data;
  if (!projects) return <PageLoader />;

  return (
    <div>
      <Container>
        <Header>
          <Title>Projects</Title>
          {user.role === 'ADMIN' ? (
            <Link to="/addProject">
              <Button>Créer un project</Button>
            </Link>
          ) : null}
        </Header>
        {projects ? (
          <ProjectList>
            {projects.map(project => (
              <ProjectCart key={project.id}>
                <Link to={`/project/${project.id}`}>
                  <ProjectName>Nom: {project.name}</ProjectName>
                  <SubName> Type: {project.category?.toLowerCase()}</SubName>
                  <NumberOfIssue>
                    <TextDeco>Number of Issue for me :</TextDeco>
                    <NUmbe>
                      {project.issues
                        ? project.issues.filter(issue => issue?.user?.id === user.id).length
                        : 0}
                    </NUmbe>
                  </NumberOfIssue>
                  <NumberOfIssue>
                    <TextDeco>Number of Issue :</TextDeco>
                    <NUmbe>{project.issues?.length || 0}</NUmbe>
                  </NumberOfIssue>
                </Link>
              </ProjectCart>
            ))}
          </ProjectList>
        ) : (
          <NoProject>
            <Image>
              <img src={image} alt="imagesss" />
            </Image>
            <TextHeader>
              <div>Vous n'avez aucun project métier</div>
            </TextHeader>
          </NoProject>
        )}
      </Container>
    </div>
  );
}
