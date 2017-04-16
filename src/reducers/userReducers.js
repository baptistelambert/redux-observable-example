import {
  FETCH_USER_FULFILLED,
  FETCH_USER_ERROR,
  FETCH_USER_CANCEL
} from '../actions/userActions';

export const user = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return action.user;
    case FETCH_USER_CANCEL:
      return state;
    default:
      return state;
  }
};

export const userError = (state = false, action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return false;
    case FETCH_USER_ERROR:
      return true;
    case FETCH_USER_CANCEL:
      return false;  
    default:
      return state;
  }
}
