import {SET_LOGIN, SET_PASSWORD, DO_LOGIN} from '../actions/LoginActions';

const defaultState = {
  comment: '',
  loading: false,
  image: null,
};

export default (state = defaultState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_LOGIN:
      return {...state, login: action.payload.login};
    case SET_PASSWORD:
      return {...state, password: action.payload.password};
  }
  return state;
};
