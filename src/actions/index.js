import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export const FETCH_PROFILE = 'FETCH_PROFILE';

export function fetchProfile(language) {
  return dispatch => {
    axios.get(`https://curriculum-3ed13.firebaseio.com/profiles/${language}.json`, { adapter: jsonpAdapter })
    .then(res => dispatch(fetchProfileSuccess(res.data)));
  }
}

const fetchProfileSuccess = (profile) => {
  return {
    type: FETCH_PROFILE,
    payload: profile
  }
}
