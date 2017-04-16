import { combineReducers } from 'redux';

import { user, userError } from './userReducers';

export default combineReducers({
  user,
  userError
});
