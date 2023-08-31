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
  ProjectName,
  SubName,
  TextDeco,
  TextHeader,
  Title,
} from './Style';

export default function ProjectUser() {
  const token = getStoredAuthToken('authToken');
  const user = jwt(token);
  const [data, error] = useApi.get('/project');
  const project = data.data;
  if (!project) return <PageLoader />;

  const userIssuesCount = project[0]?.issues?.filter(issue => issue?.user?.id === user.id).length;
  return (
    <div>
      <Container>
        <Header>
          <Title>Projects</Title>
          <Button>Créer un project</Button>
        </Header>
        {project ? (
          <Link to={`/project/${project[0].id}`}>
            <ProjectCart>
              <ProjectName>Nom: {project[0].name}</ProjectName>
              <SubName> Type: {project[0].category?.toLowerCase()}</SubName>
              <NumberOfIssue>
                <TextDeco>Number of Issue</TextDeco>
                <NUmbe>{userIssuesCount}</NUmbe>
              </NumberOfIssue>
              <NumberOfIssue>
                <TextDeco>Number of Issue</TextDeco>
                <NUmbe>{project[0].issues?.length}</NUmbe>
              </NumberOfIssue>
            </ProjectCart>
          </Link>
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
