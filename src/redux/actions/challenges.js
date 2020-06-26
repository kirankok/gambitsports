import axios from 'axios';

export const FETCH_CHALLENGES_BEGIN = 'FETCH_CHALLENGES_BEGIN';
export const FETCH_CHALLENGES_SUCCESS = 'FETCH_CHALLENGES_SUCCESS';
export const FETCH_CHALLENGES_FAILURE = 'FETCH_CHALLENGES_FAILURE';

export const fetchChallengesBegin = () => ({
  type: FETCH_CHALLENGES_BEGIN
});

export const fetchChallengesSuccess = data => ({
  type: FETCH_CHALLENGES_SUCCESS,
  payload: { data }
});

export const fetchChallengesFailure = error => ({
  type: FETCH_CHALLENGES_FAILURE,
  payload: { error }
});

export function fetchChallenges() {
  return dispatch => {
    dispatch(fetchChallengesBegin());
    return axios.get('http://localhost:3000/home')

      .then(res => {
        dispatch(fetchChallengesSuccess(res));
        return res;
      })
      .catch(error => dispatch(fetchChallengesFailure(error)));
  };
}