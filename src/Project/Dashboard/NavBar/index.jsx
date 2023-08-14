import React from 'react';
import { Avatar } from 'shared/components';
import { Container, NavBar, Logo, Links, LinksItems, User } from './Style';

export default function NavBare() {
  return (
    <div>
      <NavBar>
        <Container>
          <Logo>Jira proxymIT</Logo>
          <Links>
            <LinksItems>Project</LinksItems>
            <LinksItems>Equipe</LinksItems>
          </Links>
          <User>
            <Avatar size={20} avatarUrl="" name="sofiene" AboutTooltip />
          </User>
        </Container>
      </NavBar>
    </div>
  );
}

// equipe && project ===> user data
