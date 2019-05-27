import { combineReducers } from 'redux';
import app from './app'
import profile from './profile'

const reducers = combineReducers({
  app,
  profile,
});

export default reducers;
