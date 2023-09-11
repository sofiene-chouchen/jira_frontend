import React from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import {
  IssueType,
  IssueStatus,
  IssuePriority,
  IssueTypeCopy,
  IssuePriorityCopy,
} from 'shared/constants/issues';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';

import { Form, IssueTypeIcon, Icon, Avatar, IssuePriorityIcon } from 'shared/components';
import { getStoredAuthToken } from 'shared/utils/authToken';
import {
  FormHeading,
  FormElement,
  SelectItem,
  SelectItemLabel,
  Divider,
  Actions,
  ActionButton,
} from './Styles';

const ProjectIssueCreate = ({ project, fetchProject, onCreate, modalClose }) => {
  const token = getStoredAuthToken('authToken');
  const user = jwt(token);
  const currentUserId = user.id;
  console.log(project);

  return (
    <Form
      enableReinitialize
      initialValues={{
        type: IssueType.TASK,
        title: '',
        description: '',
        reporterId: currentUserId,
        userIds: 0,
        priority: IssuePriority.MEDIUM,
      }}
      validations={{
        type: Form.is.required(),
        title: [Form.is.required(), Form.is.maxLength(200)],
        reporterId: Form.is.required(),
        priority: Form.is.required(),
      }}
      onSubmit={async (values, form) => {
        console.log(values);
        try {
          const data = {
            ...values,
            status: IssueStatus.BACKLOG,
            project: project.id,
            user: values.userIds, // Change this to user IDs (plural)
          };
          const response = await axios.post(
            'http://localhost:8081/api/v1/issues/addIssue', // Correct the URL
            data,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (response.status === 200) {
            toast.success('Issue has been successfully created.');
            await fetchProject();
            onCreate();
          }
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormElement>
        <FormHeading>Create issue</FormHeading>
        <Form.Field.Select
          name="type"
          label="Issue Type"
          tip="Start typing to get a list of possible matches."
          options={typeOptions}
          renderOption={renderType}
          renderValue={renderType}
        />
        <Divider />
        <Form.Field.Input
          name="title"
          label="Short Summary"
          tip="Concisely summarize the issue in one or two sentences."
        />
        <Form.Field.TextEditor
          name="description"
          label="Description"
          tip="Describe the issue in as much detail as you'd like."
        />
        <Form.Field.Select
          name="reporterId"
          label="Reporter"
          options={userOptions(project)}
          renderOption={renderUser(project)}
          renderValue={renderUser(project)}
        />
        <Form.Field.Select
          name="userIds"
          label="Assignees"
          tio="People who are responsible for dealing with this issue."
          options={userOptions(project)}
          renderOption={renderUser(project)}
          renderValue={renderUser(project)}
        />
        <Form.Field.Select
          name="priority"
          label="Priority"
          tip="Priority in relation to other issues."
          options={priorityOptions}
          renderOption={renderPriority}
          renderValue={renderPriority}
        />
        <Actions>
          <ActionButton type="submit" variant="primary">
            Create Issue
          </ActionButton>
          <ActionButton type="button" variant="empty" onClick={modalClose}>
            Cancel
          </ActionButton>
        </Actions>
      </FormElement>
    </Form>
  );
};

const typeOptions = Object.values(IssueType).map(type => ({
  value: type,
  label: IssueTypeCopy[type],
}));

const priorityOptions = Object.values(IssuePriority).map(priority => ({
  value: priority,
  label: IssuePriorityCopy[priority],
}));

const userOptions = project => project?.users?.map(user => ({ value: user.id, label: user.name }));

const renderType = ({ value: type }) => (
  <SelectItem>
    <IssueTypeIcon type={type} top={1} />
    <SelectItemLabel>{IssueTypeCopy[type]}</SelectItemLabel>
  </SelectItem>
);

const renderPriority = ({ value: priority }) => (
  <SelectItem>
    <IssuePriorityIcon priority={priority} top={1} />
    <SelectItemLabel>{IssuePriorityCopy[priority]}</SelectItemLabel>
  </SelectItem>
);

const renderUser = project => ({ value: userId, removeOptionValue }) => {
  const user = project?.users?.find(({ id }) => id === userId);

  return (
    <SelectItem
      key={user.id}
      withBottomMargin={!!removeOptionValue}
      onClick={() => removeOptionValue && removeOptionValue()}
    >
      <Avatar size={20} avatarUrl={user.avatarUrl} name={user.name} />
      <SelectItemLabel>{user.name}</SelectItemLabel>
      {removeOptionValue && <Icon type="close" top={2} />}
    </SelectItem>
  );
};

export default ProjectIssueCreate;
