import { MOVIES_STORE_KEY } from './movies-constants';

export const getMoviesList = (state: any) => state[MOVIES_STORE_KEY];
