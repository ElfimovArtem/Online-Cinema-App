import { compact } from 'lodash';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __REDUX_DEVTOOLS_EXTENSION__?: any;
}

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    ...compact([
      (window as Window).__REDUX_DEVTOOLS_EXTENSION__
      && (window as Window).__REDUX_DEVTOOLS_EXTENSION__()]),
  ),
);
