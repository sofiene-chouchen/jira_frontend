import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import {
  Background,
  Card,
  LoginField,
  Button,
  CenteredContainer,
  LoginTitle,
  Links,
} from './Styles';

export default function index() {
  return (
    <Background>
      <CenteredContainer>
        <Card>
          <LoginTitle>Register</LoginTitle>
          <LoginField type="text" placeholder="Email" />
          <LoginField type="password" placeholder="Password" />
          <LoginField type="password" placeholder="Confirm Password" />
          <Button>Register</Button>
          <span>
            Already have an account?{' '}
            <Link to="/login">
              <Links>Login </Links>
            </Link>
          </span>
        </Card>
      </CenteredContainer>
    </Background>
  );
}
