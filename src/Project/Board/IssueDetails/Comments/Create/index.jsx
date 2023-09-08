import React, { Fragment, useState } from 'react';

import jwt from 'jwt-decode';
import api from 'shared/utils/api';
import toast from 'shared/utils/toast';

import { getStoredAuthToken } from 'shared/utils/authToken';
import BodyForm from '../BodyForm';
import ProTip from './ProTip';
import { Create, UserAvatar, Right, FakeTextarea } from './Styles';

const ProjectBoardIssueDetailsCommentsCreate = ({ issueId, fetchIssue }) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isCreating, setCreating] = useState(false);
  const [body, setBody] = useState('');

  const token = getStoredAuthToken('authToken');
  const currentUser = jwt(token);
  const data = {
    body,
    issues: issueId,
    user: currentUser.id,
  };
  const handleCommentCreate = async () => {
    try {
      setCreating(true);
      await api.post(`/comment`, data);
      await fetchIssue();
      setFormOpen(false);
      setCreating(false);
      setBody('');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Create>
      {currentUser && <UserAvatar name={currentUser.name} avatarUrl={currentUser.avatarUrl} />}
      <Right>
        {isFormOpen ? (
          <BodyForm
            value={body}
            onChange={setBody}
            isWorking={isCreating}
            onSubmit={handleCommentCreate}
            onCancel={() => setFormOpen(false)}
          />
        ) : (
          <Fragment>
            <FakeTextarea onClick={() => setFormOpen(true)}>Add a comment...</FakeTextarea>
            <ProTip setFormOpen={setFormOpen} />
          </Fragment>
        )}
      </Right>
    </Create>
  );
};

export default ProjectBoardIssueDetailsCommentsCreate;
