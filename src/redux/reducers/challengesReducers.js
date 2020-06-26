import { FETCH_CHALLENGES_BEGIN, FETCH_CHALLENGES_FAILURE, FETCH_CHALLENGES_SUCCESS } from '../actions/challenges'

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function challengesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHALLENGES_BEGIN:

      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CHALLENGES_SUCCESS:

      return {
        ...state,
        loading: false,
        data: action.payload.data.data
      };

    case FETCH_CHALLENGES_FAILURE:

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