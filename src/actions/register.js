import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios
        .post("https://the-joker-spa.herokuapp.com/api/auth/register", creds)
        .then(res => {
            console.log(res);
            dispatch({ type: REGISTER_SUCCESSFUL });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REGISTER_FAILURE, error: err });
        });
};
