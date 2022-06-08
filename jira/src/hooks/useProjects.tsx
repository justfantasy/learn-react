import { useEffect, useState } from 'react';
import qs from 'qs';
import { Project } from '../interfaces/ProjectInterface';
import { Search } from '../interfaces/SearchInterface';
import { filterFalsyObject } from '../utils';
import useDebounce from './useDebounce';

export default function useProjects(search: Search) {
  const [projects, setProjects] = useState<Project[] | []>([]);
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    fetch(`http://localhost:3001/projects?${qs.stringify(filterFalsyObject(debouncedSearch))}`)
      .then((res) => res.json())
      .then((json) => setProjects(json));
  }, [debouncedSearch]);

  return projects;
}
