import { axiosWithAuth } from "../utils/axiosWithAuth";

export const DEL_START = "DEL_START";
export const DEL_SUCCESS = "DEL_SUCCESS";
export const DEL_FAILED = "DEL_FAILED";

export const delJoke = joke => dispatch => {
  dispatch({type: DEL_START})
  return axiosWithAuth()
    .delete(`https://jokr.herokuapp.com/api/jokes/${joke.id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DEL_SUCCESS, payload: joke.id });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DEL_FAILED, payload: err });
    });
};
