const SET_PEOPLE = 'cookoon-expo/cookoonSearch/SET_PEOPLE';

const INITIAL_STATE = {
  address: '',
  people: 4,
  dateTime: null,
  formattedDateTime: '',
  duration: 2
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, people: action.payload };
    default:
      return state;
  }
}

export function setPeople(people) {
  return { type: SET_PEOPLE, payload: people };
}
