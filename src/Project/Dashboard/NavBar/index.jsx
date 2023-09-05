import React from 'react';
import jwt from 'jwt-decode';
import { Link } from 'react-router-dom';
import { Avatar } from 'shared/components';
import { getStoredAuthToken } from 'shared/utils/authToken';
import { Container, Links, LinksItems, Logo, NavBar, User } from './Style';

export default function NavBare() {
  const token = getStoredAuthToken('authToken');
  const user = jwt(token);
  return (
    <div>
      <NavBar>
        <Container>
          <Link to="/dashboard">
            <Logo>Jira proxymIT</Logo>
          </Link>
          <Links>
            <Link to="/users">
              <LinksItems>users</LinksItems>
            </Link>
          </Links>
          <User>
            <Avatar size={23} avatarUrl="" name={user.name} AboutTooltip />
          </User>
        </Container>
      </NavBar>
    </div>
  );
}
