import Expo from 'expo';

const resolveServerUrl = () => {
  if (Expo.Constants.manifest.realeaseChannel === 'staging') {
    return 'https://cookoon-staging.herokuapp.com';
  }
  return 'http://localhost:3000';
};

const serverUrl = resolveServerUrl();
const apiUrl = `${serverUrl}/api`;

console.log('Server URL: ', serverUrl);

export default {
  apiUrl,
  serverUrl
};
