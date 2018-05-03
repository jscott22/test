import { SORT_UPDATED } from '../constants';

export default sortType => ({
  type: SORT_UPDATED,
  payload: sortType,
});
