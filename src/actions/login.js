import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://jokr.herokuapp.com/api/auth/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESSFUL });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, error: err });
    });
};
