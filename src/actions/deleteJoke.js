import { axiosWithAuth } from "../utils/axiosWithAuth";

export const DEL_SUCCESS = "DEL_SUCCESS";
export const DEL_FAILED = "DEL_FAILED";

export const addJoke = joke => dispatch => {
  return axiosWithAuth()
    .post("https://jokr.herokuapp.com/api/jokes", joke)
    .then(res => {
      console.log(res);
      dispatch({ type: DEL_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DEL_FAILED, payload: err });
    });
};
