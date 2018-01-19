import { combineReducers } from 'redux';
import axios from 'axios';

import env from 'constants/env';

import searchReducer from './search';

const FETCH_COOKOONS = 'cookoon-expo/cookoons/FETCH_COOKOONS';
const SELECT_COOKOON = 'cookoon-expo/cookoons/SELECT_COOKOON';

const INITIAL_STATE = { index: [], show: {} };

function indexReducer(state = INITIAL_STATE.index, action) {
  switch (action.type) {
    case FETCH_COOKOONS:
      return action.payload;
    default:
      return state;
  }
}

function showReducer(state = INITIAL_STATE.show, action) {
  switch (action.type) {
    case SELECT_COOKOON:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  index: indexReducer,
  show: showReducer,
  search: searchReducer
});

export const fetchCookoons = () => async dispatch => {
  try {
    const { data } = await axios.get(`${env.API_BASE_URL}/cookoons`);
    dispatch({ type: FETCH_COOKOONS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const selectCookoon = cookoon => ({
  type: SELECT_COOKOON,
  payload: cookoon
});
