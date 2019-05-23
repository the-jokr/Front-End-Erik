import { axiosWithAuth } from "../utils/axiosWithAuth";

export const EDIT_START = "EDIT_START";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILED = "EDIT_FAILED";

export const editJoke = joke => dispatch => {
  dispatch({ type: EDIT_START });
  return axiosWithAuth()
    .put(`https://jokr.herokuapp.com/api/jokes/${joke.id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: EDIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EDIT_FAILED, payload: err });
    });
};
