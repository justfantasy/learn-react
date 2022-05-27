import { useEffect, useState } from 'react';
import { User } from '../interfaces/UserInterface';

export default function useUsers() {
  const [users, setUsers] = useState<User[] | []>([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  return users;
}
