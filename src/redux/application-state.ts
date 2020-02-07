import { MOVIES_STORE_KEY, MovieElement } from '../modules/movies';

export interface ApplicationState {
  [MOVIES_STORE_KEY]: MovieElement;
}
