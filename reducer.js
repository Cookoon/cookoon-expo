import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './screens/Auth/duck';
import cookoons from './screens/Home/duck';
import selectedCookoon from './screens/Home/screens/CookoonsShow/duck';
import cookoonSearch from './screens/Home/components/CookoonSearch/duck';

export default combineReducers({
  auth,
  cookoons,
  selectedCookoon,
  cookoonSearch,
  form
});
