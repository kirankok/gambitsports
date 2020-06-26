import axios from 'axios';

export const FETCH_PAYMENTS_BEGIN = 'FETCH_PAYMENTS_BEGIN';
export const FETCH_PAYMENTS_SUCCESS = 'FETCH_PAYMENTS_SUCCESS';
export const FETCH_PAYMENTS_FAILURE = 'FETCH_PAYMENTS_FAILURE';

export const fetchPaymentsBegin = () => ({
  type: FETCH_PAYMENTS_BEGIN
});

export const fetchPaymentsSuccess = data => ({
  type: FETCH_PAYMENTS_SUCCESS,
  payload: { data }
});

export const fetchPaymentsFailure = error => ({
  type: FETCH_PAYMENTS_FAILURE,
  payload: { error }
});

export function fetchPayments() {
  return dispatch => {
    dispatch(fetchPaymentsBegin());
    return axios.get('http://localhost:3000/wallet')
      .then(res => {
        dispatch(fetchPaymentsSuccess(res));
        return res;
      })
      .catch(error => dispatch(fetchPaymentsFailure(error)));
  };
}