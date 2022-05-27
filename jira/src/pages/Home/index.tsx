import React, { useEffect, useState } from 'react';
import ProjectList from '../../components/ProjectList';
import SearchPanel from '../../components/SearchPanel';
import useUsers from '../../hooks/useUsers';
import useProjects from '../../hooks/useProjects';
import { Search } from '../../interfaces/SearchInterface';

function Home() {
  const [search, setSearch] = useState<Search>({
    name: '',
    userId: '',
  });

  const users = useUsers();
  const projects = useProjects();

  return (
    <div>
      <SearchPanel search={search} setSearch={setSearch} users={users} />
      <ProjectList projects={projects} users={users} />
    </div>
  );
}

export default Home;
