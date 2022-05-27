import { useEffect, useState } from 'react';
import { Project } from '../interfaces/ProjectInterface';

export default function useProjects() {
  const [projects, setProjects] = useState<Project[] | []>([]);

  useEffect(() => {
    fetch('http://localhost:3001/projects')
      .then((res) => res.json())
      .then((json) => setProjects(json));
  }, []);

  return projects;
}
