import axios from 'axios';
import { SET_MOVIES } from './movies-constants';

export const fetchMovies = () => async (dispatch: ReduxDispatch) => {
  const response = await axios.get('http://localhost:5000/movies');
  const { data } = response;

  dispatch({
    type: SET_MOVIES,
    data,
  });
};
