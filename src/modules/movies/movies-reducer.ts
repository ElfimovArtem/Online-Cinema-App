import { SET_MOVIES } from './movies-constants';

export const movieReducer = (state: any = [], { type, data }: any) => {
  switch (type) {
    case SET_MOVIES:
      return [
        ...state,
        ...data,
      ];
    default:
      return state;
  }
};
