import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useApi from 'shared/hooks/api';
import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import { Buttons, Container, Form, Header, Input, Label, Selector, Title } from './Styles';
import NavBare from '../Dashboard/NavBar';
import { getStoredAuthToken } from '../../shared/utils/authToken';

export default function Index() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [category, setCategory] = useState('');
  const [users, error] = useApi.get('/user');
  const token = getStoredAuthToken('authToken');
  const categoryOptions = Object.values(ProjectCategory).map(category => ({
    value: category,
    label: ProjectCategoryCopy[category],
  }));

  const history = useHistory();

  const handleUserSelect = e => {
    const selectedIds = Array.from(e.target.selectedOptions, option => parseInt(option.value));
    setSelectedUserIds(selectedIds);
  };

  const handleFormSubmit = async () => {
    const data = {
      name,
      description,
      category,
      usersId: selectedUserIds,
    };

    try {
      const response = await axios.post('http://localhost:8081/api/v1/project/addProject', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        history.push('/');
      }
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('Error submitting form:', error);
    }
  };

  return (
    <React.Fragment>
      <NavBare />
      <Container>
        <Header>
          <Title>Create new project</Title>
        </Header>
        <Form>
          <Label>Name :</Label>
          <Input
            type="text"
            placeholder="Project name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Label>Description :</Label>
          <Input
            type="text"
            placeholder="Project description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Label>Category :</Label>
          <Selector
            name="Category"
            value={category}
            onChange={event => setCategory(event.target.value)}
          >
            <option value="" disabled>
              Select category
            </option>
            {categoryOptions.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </Selector>
          <Label>Users :</Label>
          <Selector name="users" multiple onChange={handleUserSelect} value={selectedUserIds}>
            {users.data?.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Selector>

          <Buttons type="button" onClick={handleFormSubmit}>
            Ajouter
          </Buttons>
        </Form>
      </Container>
    </React.Fragment>
  );
}
