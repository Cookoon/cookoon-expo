import axios from 'axios';

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
    const { data } = await axios.get('http://localhost:3000/api/cookoons');
    dispatch({ type: FETCH_COOKOONS, payload: data });
  } catch (error) {
    console.error(error);
  }
};
