import React, { useState } from 'react';
import jwt from 'jwt-decode';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from 'shared/components';
import { getStoredAuthToken, removeStoredAuthToken } from 'shared/utils/authToken';
import { Container, Links, LinksItems, Logo, NavBar, User, ProfileDropdown } from './Style';

export default function NavBare() {
  const token = getStoredAuthToken('authToken');
  const user = jwt(token);
  const history = useHistory();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const disconnect = () => {
    // removeStoredAuthToken();
    history.push('/login');
  };

  return (
    <div>
      <NavBar>
        <Container>
          <Link to="/dashboard">
            <Logo>Jira proxymIT</Logo>
          </Link>
          {user.role === 'ADMIN' ? (
            <Links>
              <Link to="/users">
                <LinksItems>Users</LinksItems>
              </Link>
            </Links>
          ) : null}
          <User>
            <Avatar
              size={23}
              avatarUrl=""
              name={user.name}
              AboutTooltip
              onClick={toggleProfileDropdown}
            />
            {isProfileDropdownOpen && (
              <ProfileDropdown>
                <button onClick={disconnect}>Disconnect</button>
              </ProfileDropdown>
            )}
          </User>
        </Container>
      </NavBar>
    </div>
  );
}
