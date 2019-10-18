import { LOGIN_START, LOGIN_SUCCESSFUL, LOGIN_FAILURE } from "../actions";

const initialState = {
    loggingIn: false,
    error: null,
    isLoggedIn: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: null
                // isLoggedIn: false
            };
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                loggingIn: false,
                error: null
                // isLoggedIn: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.error
                // isLoggedIn: false
            };
        default:
            return state;
    }
};
