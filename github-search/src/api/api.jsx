import axios from 'axios';

function searchUser(q) {
  return axios.get('search/user', { params: { q } });
}

export default searchUser;

export {
  searchUser,
};
