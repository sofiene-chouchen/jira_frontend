import React, { useState } from 'react'; // Import useEffect
import jwt from 'jwt-decode';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { Button } from 'shared/components';
import useApi from 'shared/hooks/api';

import Modal from 'shared/components/Modal';
import { BoardName, Header, ModelContents } from './Styles';
import { getStoredAuthToken } from '../../../shared/utils/authToken';
import { Buttons, Label, Selector } from '../../ProjectCreate/Styles';
import axios from 'axios';
import toast from '../../../shared/utils/toast';

const token = getStoredAuthToken('authToken');
const user = jwt(token);

const ProjectBoardHeader = () => {
  const history = useHistory();
  const { id } = useParams();
  const match = useRouteMatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToAssignet, setUserToAssignet] = useState([]);
  const [data, error] = useApi.get('/user');
  const [dataProject, projectError] = useApi.get(`/project/${id}`);
  const users = data?.data;
  const usersProject = dataProject?.data.users;
  const UserNotAssigned = users?.filter(user => {
    return !usersProject.some(projectUser => projectUser.name === user.name);
  });

  const dataToPass = {
    projectId: parseInt(id),
    userId: userToAssignet,
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addUser = async () => {
    const response = await axios.put('http://localhost:8081/api/v1/project', dataToPass, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      toast.success('Users added successful');
      setIsModalOpen(!isModalOpen);
    } else {
      toast.error('error !! ');
    }
  };

  return (
    <Header>
      <BoardName>Kanban board</BoardName>
      {user.role === 'ADMIN' ? (
        <React.Fragment>
          <Button icon="user" onClick={toggleModal}>
            Add User
          </Button>
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              onClose={toggleModal}
              renderContent={() => (
                <ModelContents>
                  <h2>Add user to project</h2>
                  <Label>Users :</Label>
                  <Selector
                    name="User"
                    value={userToAssignet}
                    onChange={event => {
                      setUserToAssignet([...userToAssignet, parseInt(event.target.value)]);
                    }}
                    multiple
                  >
                    <option value="" disabled>
                      Select Users
                    </option>
                    {UserNotAssigned.map(user => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </Selector>
                  <br />
                  <Buttons onClick={addUser}>Add</Buttons>
                </ModelContents>
              )}
            />
          )}
        </React.Fragment>
      ) : null}
    </Header>
  );
};

export default ProjectBoardHeader;
