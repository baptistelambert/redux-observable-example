export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_CANCEL = 'FETCH_USER_CANCEL';

export const fetchUser = id => ({ type: FETCH_USER, id });
export const fetchUserFulfilled = user => ({ type: FETCH_USER_FULFILLED, user });
export const fetchUserError = () => ({ type: FETCH_USER_ERROR });
export const fetchUserCancel = () => ({ type: FETCH_USER_CANCEL });
