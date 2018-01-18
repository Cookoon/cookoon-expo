import axios from 'axios';
import jwtDecode from 'jwt-decode';

const SET_JWT = 'cookoon-expo/auth/SET_JWT';
const SIGN_OUT = 'cookoon-expo/auth/SIGN_OUT';

const INITIAL_STATE = {
  jwt: '',
  exp: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_JWT:
      return {
        ...state,
        jwt: action.payload,
        exp: jwtDecode(action.payload).exp
      };
    case SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export function setJwt(jwt) {
  axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  return { type: SET_JWT, payload: jwt };
}

export function signOut() {
  delete axios.defaults.headers.common.Authorization;
  return { type: SIGN_OUT };
}
