import {
  REGISTER_START,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILURE
} from "../actions";

const initialState = {
  registering: false,
  error: null
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        registering: true,
        error: null
      };
    case REGISTER_SUCCESSFUL:
      return {
        ...state,
        registering: false,
        error: null,
        data: action.payload
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.error
      };
    default:
      return state;
  }
};
