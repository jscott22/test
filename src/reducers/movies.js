import { MOVIES_FETCH_ERROR, MOVIES_FETCH_SUCCESS, MOVIES_FETCHING, MOVIE_SELECTED } from '../constants';

const defaultState = {
  movies: {},
  movieIds: [],
  selectedMovieId: null,
  fetching: false,
  error: null,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case MOVIES_FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case MOVIES_FETCH_SUCCESS:
      return {
        movies: payload.entities.movies,
        movieIds: payload.result,
        error: null,
        fetching: false,
      };
    case MOVIES_FETCH_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false,
      };
    case MOVIE_SELECTED:
      return {
        ...state,
        selectedMovieId: payload,
      };
    default:
      return state;
  }
};
