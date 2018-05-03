import { SORT_UPDATED } from '../constants';

export default (state = 'EPISODE', action) => {
  switch (action.type) {
    case SORT_UPDATED:
      return action.payload;
    default:
      return state;
  }
};
