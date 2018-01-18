const SELECT_COOKOON = 'cookoon-expo/cookoons/SELECT_COOKOON';

const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_COOKOON:
      return action.payload;
    default:
      return state;
  }
}

export const selectCookoon = cookoon => ({
  type: SELECT_COOKOON,
  payload: cookoon
});
