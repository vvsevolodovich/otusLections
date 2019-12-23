import {
  NEW_POST_SET_COMMENT,
  NEW_POST_SEND,
  NEW_POST_SEND_DONE,
} from '../actions/NewPostActions';

const defaultState = {
  comment: '',
  loading: false,
  image: null,
};

export default (state = defaultState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case NEW_POST_SET_COMMENT:
      return {...state, comment: action.payload.comment};
    case NEW_POST_SEND:
      return {...state, loading: true};
    case NEW_POST_SEND_DONE:
      return {...defaultState};
  }
  return state;
};
