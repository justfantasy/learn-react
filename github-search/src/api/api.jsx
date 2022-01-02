import axios from 'axios';

function searchUser(q) {
  return axios.get('search/user1', { params: { q } });
}

export default searchUser;

export {
  searchUser,
};
