import React from 'react';
import { User } from '../../interfaces/UserInterface';
import { Search } from '../../interfaces/SearchInterface';

interface Props {
  users: User[] | [],
  // eslint-disable-next-line no-unused-vars
  setSearch: (param: Search) => void,
  search: Search
}

function SearchPanel({ users, search, setSearch }: Props) {
  return (
    <form>
      <input
        type="text"
        value={search.name}
        onChange={(event) => setSearch({
          ...search,
          name: event.target.value,
        })}
      />
      <select
        value={search.userId}
        onChange={(event) => setSearch({
          ...search,
          userId: event.target.value,
        })}
      >
        <option value="">请选择</option>
        {
          users.map((user) => <option key={user.id} value={user?.id}>{user?.name}</option>)
        }
      </select>
    </form>
  );
}

export default SearchPanel;
