import React, { useState } from 'react';
import '../../index.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import useApi from 'shared/hooks/api';
import {
  Background,
  Card,
  LoginField,
  Button,
  CenteredContainer,
  LoginTitle,
  Links,
} from './Style';

export default function index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    const LoginData = {
      email,
      password,
    };
    // useApi
    //   .post('/login', LoginData)
    axios
      .post('http://localhost:8081/api/v1/auth/login', LoginData)
      .then(response => {
        if (response.status === 200) {
          const receivedToken = response.data.token;
          localStorage.setItem('authToken', receivedToken);

          history.push('/dashboard');
        } else {
          console.log('Login failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <Background>
      <CenteredContainer>
        <Card>
          <LoginTitle>Login</LoginTitle>
          <LoginField
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <LoginField
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
          <span>
            New here?
            <Link to="/register">
              <Links> Register </Links>
            </Link>
          </span>
        </Card>
      </CenteredContainer>
    </Background>
  );
}
