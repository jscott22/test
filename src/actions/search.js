import { SEARCH_UPDATED } from '../constants';

export default searchValue => ({
  type: SEARCH_UPDATED,
  payload: searchValue,
});
