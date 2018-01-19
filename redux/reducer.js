import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './modules/auth';
import cookoons from './modules/cookoons';

export default combineReducers({
  auth,
  cookoons,
  form
});
