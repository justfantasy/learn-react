import { ADD_PERSON, DEL_PERSON } from '../constants';

const addPersonAction = (data) => ({ type: ADD_PERSON, data });
const delPersonAction = (data) => ({ type: DEL_PERSON, data });

export {
  addPersonAction,
  delPersonAction,
};
