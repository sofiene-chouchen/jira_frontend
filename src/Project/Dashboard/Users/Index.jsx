import React from 'react';
import { Link } from 'react-router-dom';
import useApi from 'shared/hooks/api';
import NavBare from '../NavBar';
import { Container, Table, Td, Th, Button, Header, Title } from './Styled';
import Loader from '../../Board/IssueDetails/Loader';

export default function Index() {
  const [data, error] = useApi.get('/user');
  const users = data.data;

  if (users === null) {
    return (
      <React.Fragment>
        <NavBare />
        <Loader />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <NavBare />
      <Container>
        <Header>
          <Title>Users</Title>
          <Link to="/userCreation">
            <Button>Créer un user</Button>
          </Link>
        </Header>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </tr>
          </thead>
          <tbody>
            {users?.map(user => (
              <tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                {/* Add more table data cells as needed */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}
