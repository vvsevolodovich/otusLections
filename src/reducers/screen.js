import {EDIT_COMMENT} from '../actions/ScreenActions';

const defaultState = {
  comment: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case EDIT_COMMENT:
      return {...state, comment: action.payload.comment};
    default:
      return state;
  }
};
