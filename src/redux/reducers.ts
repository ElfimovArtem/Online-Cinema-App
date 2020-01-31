import { combineReducers } from 'redux';
import { movieReducer, MOVIES_STORE_KEY } from '../modules/movies';

export interface ApplicationState {
  [key: string]: {};
}

export const reducers = combineReducers({
  [MOVIES_STORE_KEY]: movieReducer,
});
