import { SEARCH_UPDATED } from '../constants';

export default (state = '', action) => {
  switch (action.type) {
    case SEARCH_UPDATED:
      return action.payload;
    default:
      return state;
  }
};
