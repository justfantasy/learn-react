import axios from 'axios';

function searchUser(q) {
  return axios.get('search/users', { params: { q } });
}

export default searchUser;

export {
  searchUser,
};
