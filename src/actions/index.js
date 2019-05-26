import axios from 'axios';

export const FETCH_PROFILE = 'FETCH_PROFILE';

export function fetchProfile(language) {
  return dispatch => {
    axios.get(`https://api.github.com/users/filipenatanael/orgs`)
    .then(res => dispatch(fetchProfileSuccess(res.data)));
  }
}

const fetchProfileSuccess = (profile) => {
  return {
    type: FETCH_PROFILE,
    payload: profile
  }
}
