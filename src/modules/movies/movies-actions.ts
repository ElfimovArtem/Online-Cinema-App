import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { SET_MOVIES } from './movies-constants';

export const fetchMovies = () => async (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {
  const response = await axios.get('http://localhost:5000/movies');
  const { data } = response;

  dispatch({
    type: SET_MOVIES,
    data,
  });
};
