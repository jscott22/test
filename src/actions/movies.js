import { normalize, schema } from 'normalizr';
import axios from 'axios';

import { MOVIES_FETCHING, MOVIES_FETCH_SUCCESS, MOVIES_FETCH_ERROR, MOVIE_SELECTED } from '../constants';

const movies = new schema.Entity('movies');
const movieList = [movies];

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: MOVIES_FETCHING });

  try {
    const { data } = await axios.get(' https://star-wars-api.herokuapp.com/films');
    const normalized = normalize(data, movieList);

    dispatch({
      type: MOVIES_FETCH_SUCCESS,
      payload: normalized,
    });
  } catch ({ message }) {
    dispatch({
      type: MOVIES_FETCH_ERROR,
      payload: message,
    });
  }
};

export const selectMovie = movieId => ({
  type: MOVIE_SELECTED,
  payload: movieId,
});
