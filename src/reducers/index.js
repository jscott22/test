import { combineReducers } from 'redux';

import movies from './movies';
import search from './search';
import sort from './sort';

export default combineReducers({
  movies,
  search,
  sort,
});
