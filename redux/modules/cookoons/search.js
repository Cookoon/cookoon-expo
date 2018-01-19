import moment from 'moment';
import 'moment/locale/fr';

const SET_ADDRESS = 'cookoon-expo/cookoonsSearch/SET_ADDRESS';
const SET_PEOPLE = 'cookoon-expo/cookoonsSearch/SET_PEOPLE';
const SET_DATE_TIME = 'cookoon-expo/cookoonsSearch/SET_DATE_TIME';
const SET_DURATION = 'cookoon-expo/cookoonsSearch/SET_DURATION';

const INITIAL_STATE = {
  address: '',
  people: 4,
  dateTime: null,
  formattedDateTime: '',
  duration: 2
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case SET_PEOPLE:
      return { ...state, people: action.payload };
    case SET_DATE_TIME:
      return {
        ...state,
        dateTime: action.payload,
        formattedDateTime: moment(action.payload)
          .locale('fr')
          .format('Do MMMM à HH[h]mm')
      };
    case SET_DURATION:
      return { ...state, duration: action.payload };
    default:
      return state;
  }
}

export function setAddress(address) {
  return { type: SET_ADDRESS, payload: address };
}

export function setPeople(people) {
  return { type: SET_PEOPLE, payload: people };
}

export function setDateTime(dateTime) {
  return { type: SET_DATE_TIME, payload: dateTime };
}

export function setDuration(duration) {
  return { type: SET_DURATION, payload: duration };
}
