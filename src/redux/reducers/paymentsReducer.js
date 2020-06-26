import { FETCH_PAYMENTS_BEGIN, FETCH_PAYMENTS_FAILURE, FETCH_PAYMENTS_SUCCESS } from '../actions/paymentsActions'

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function paymentsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAYMENTS_BEGIN:

      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PAYMENTS_SUCCESS:

      return {
        ...state,
        loading: false,
        data: action.payload.data.data
      };

    case FETCH_PAYMENTS_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}