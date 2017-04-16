import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';

import {
  FETCH_USER,
  FETCH_USER_CANCEL,
  fetchUserFulfilled,
  fetchUserError
} from '../actions/userActions';

export const fetchUserEpic = (action$, store) =>
  action$
    .ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`http://jsonplaceholder.typicode.com/users/${action.id}`)
        .retryWhen(err => err
          .do(() => store.dispatch(fetchUserError()))
          .delayWhen(() => window.navigator.onLine
            ? Observable.timer(1000)
            : Observable.fromEvent(window, 'online')
          )
        )
        .takeUntil(action$.ofType(FETCH_USER_CANCEL))
        .map(res => fetchUserFulfilled(res))
        .catch(err => store.dispatch(fetchUserError()))
    );
