import { FETCHING_SUCCESS, FETCHING_JOKES, FETCHING_FAIL } from "../actions";

const initialState = {
  isFetching: false,
  error: null,
  jokes: []
};

export const getJokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_JOKES:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jokes: action.payload
      };
    case FETCHING_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
