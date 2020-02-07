import { SET_MOVIES } from './movies-constants';
import { MovieElement } from './movies-types';

export const movieReducer = (state: MovieElement[] = [], { type, payload }: ReduxAction) => {
  switch (type) {
    case SET_MOVIES:
      return [
        ...payload,
      ];
    default:
      return state;
  }
};
