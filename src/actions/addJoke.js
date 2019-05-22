import { axiosWithAuth } from "../utils/axiosWithAuth";
export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILED = "ADD_FAILED";

export const addJoke = joke => dispatch => {
  dispatch({ type: ADD_START });
  return axiosWithAuth()
    .post("https://jokr.herokuapp.com/api/jokes", joke)
    .then(res => {
      dispatch({ type: ADD_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: ADD_FAILED, payload: err });
    });
};
