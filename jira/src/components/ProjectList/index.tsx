import React from 'react';
import { User } from '../../interfaces/UserInterface';
import { Project } from '../../interfaces/ProjectInterface';

interface Props {
  users: User[] | [],
  projects: Project[] | []
}

function ProjectList({ users, projects }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{users.find((user) => user.id === project.userId)?.name || '未知'}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default ProjectList;
