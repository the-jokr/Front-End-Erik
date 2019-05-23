import { axiosWithAuth } from "../utils/axiosWithAuth";

export const ADD_SAVED_START = "ADD_SAVED_START";
export const ADD_SAVED_SUCCESS = "ADD_SAVED_SUCCESS";
export const ADD_SAVED_FAIL = "ADD_SAVED_FAIL";

export const addSavedJokes = joke => dispatch => {
  dispatch({ type: ADD_SAVED_START });
  return axiosWithAuth()
    .post(`https://jokr.herokuapp.com/api/wallet/`, joke)
    .then(res => {
      dispatch({ type: ADD_SAVED_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: ADD_SAVED_FAIL, payload: err });
    });
};
