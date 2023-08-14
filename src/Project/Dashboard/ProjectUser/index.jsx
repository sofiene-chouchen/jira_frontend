import React from 'react';
import image from '../../../images/bag.png';
import {
  SubName,
  ProjectName,
  Button,
  Buttons,
  Container,
  Header,
  ProjectCart,
  Title,
  NoProject,
  Image,
  TextHeader,
  TextHint,
} from './Style';

export default function ProjectUser() {
  // const project = null;
  return (
    <div>
      <Container>
        <Header>
          <Title>Projects</Title>
          <Button>Créer un project</Button>
        </Header>
        <ProjectCart>
          <ProjectName>test</ProjectName>
          <SubName>test</SubName>
        </ProjectCart>
        <NoProject>
          <Image>
            <img src={image} alt="imagesss" />
          </Image>
          <TextHeader>
            <div>Vous n'avez aucun project métier</div>
          </TextHeader>
          <TextHint>
            Crée un project metier pour gérer des taches , suivre les infromation et mesurer les
            performances avec votre equipe
          </TextHint>
          <Buttons>Créer un project</Buttons>
        </NoProject>
      </Container>
    </div>
  );
}
