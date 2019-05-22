import { DEL_SUCCESS, DEL_FAILED } from "../actions";

const initialState = {
  jokes: [],
  error: null
};

export const delJokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEL_SUCCESS:
      return {
        ...state,
        jokes: action.payload,
        error: null
      };
    case DEL_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
