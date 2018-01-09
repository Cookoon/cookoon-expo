import Expo from 'expo';

const { Constants: { manifest } } = Expo;
const releaseChannel = manifest.releaseChannel || 'default';

export default {
  default: {
    BASE_URL: 'http://localhost:3000',
    API_BASE_URL: 'http://localhost:3000/api'
  },
  staging: {
    BASE_URL: 'https://cookoon-staging.herokuapp.com',
    API_BASE_URL: 'https://cookoon-staging.herokuapp.com/api'
  },
  production: {
    BASE_URL: 'https://app.cookoon.fr',
    API_BASE_URL: 'https://app.cookoon.fr/api'
  }
}[releaseChannel];
