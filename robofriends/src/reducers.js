import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
  query: '',
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {query: action.payload});
    default:
      return state;
  }
};
