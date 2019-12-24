import {combineReducers} from 'redux';
import screen from './screen';
import newpost from './newpost';
import login from './login';

export default combineReducers({screen, newpost, login});
