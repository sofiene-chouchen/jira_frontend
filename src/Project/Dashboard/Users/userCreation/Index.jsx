import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../../NavBar/index';
import { Form, Header, Input, Label, Selector, Title } from '../../../ProjectCreate/Styles';
import { Container } from '../Styled';
import { Buttons } from '../../ProjectUser/Style';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const Role = ['ADMIN', 'DEV', 'QA', 'ARCHITECT', 'SCRUM_MASTER', 'PRODUCT_OWNER'];
  const history = useHistory();
  const handelSubmit = async () => {
    const data = {
      name,
      email,
      password,
      role,
    };
    const response = await axios.post('http://localhost:8081/api/v1/auth/register', data);
    if (response.status === 200) {
      history.push('/users');
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Header>
          <Title>Create new user</Title>
        </Header>
        <Form>
          <Label>UserName :</Label>
          <Input onChange={e => setName(e.target.value)} />
          <Label>Email :</Label>
          <Input type="email" onChange={e => setEmail(e.target.value)} />
          <Label>Password :</Label>
          <Input type="password" onChange={e => setPassword(e.target.value)} />
          <Label>Role</Label>
          <Selector name="Category" value={role} onChange={event => setRole(event.target.value)}>
            <option value="" disabled>
              Select Role
            </option>
            {Role.map(cat => (
              <option key={cat.id} value={cat}>
                {cat}
              </option>
            ))}
          </Selector>
          <Buttons type="button" onClick={handelSubmit}>
            Ajoutez
          </Buttons>
        </Form>
      </Container>
    </React.Fragment>
  );
}
