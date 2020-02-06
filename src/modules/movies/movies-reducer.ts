import { SET_MOVIES } from './movies-constants';

export const movieReducer = (state: any = [], { type, payload }: ReduxAction) => {
  switch (type) {
    case SET_MOVIES:
      return [
        ...payload,
      ];
    default:
      return state;
  }
};
