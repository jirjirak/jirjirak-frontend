import { combineReducers } from 'redux';
// reducers
import app from 'redux/reducers/app.reducer';
import auth from 'redux/reducers/auth.reducer';

const reducers = combineReducers({
  app,
  auth,
});

export default reducers;
