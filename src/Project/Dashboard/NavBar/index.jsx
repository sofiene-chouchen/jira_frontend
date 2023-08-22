import React from 'react';
import jwt from 'jwt-decode';
import { Avatar } from 'shared/components';
import { getStoredAuthToken } from 'shared/utils/authToken';
import { Container, NavBar, Logo, Links, LinksItems, User } from './Style';

export default function NavBare() {
  const token = getStoredAuthToken('authToken');
  const user = jwt(token);
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
            <Avatar size={20} avatarUrl="" name={user.name} AboutTooltip />
          </User>
        </Container>
      </NavBar>
    </div>
  );
}

// equipe && project ===> user data
