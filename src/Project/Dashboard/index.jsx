import React from 'react';
import NavBare from 'Project/Dashboard/NavBar';
import ProjectUser from './ProjectUser';

export default function Dashboard() {
  return (
    <React.Fragment>
      <NavBare />
      <ProjectUser />
    </React.Fragment>
  );
}
