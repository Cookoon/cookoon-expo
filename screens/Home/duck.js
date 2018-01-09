import axios from 'axios';

import env from 'constants/env';

const FETCH_COOKOONS = 'cookoon-expo/cookoons/FETCH_COOKOONS';

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COOKOONS:
      return action.payload;
    default:
      return state;
  }
}

export const fetchCookoons = () => async dispatch => {
  try {
    const { data } = await axios.get(`${env.apiUrl}/cookoons`);
    dispatch({ type: FETCH_COOKOONS, payload: data });
  } catch (error) {
    console.error(error);
  }
};
