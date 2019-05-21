import axios from "axios";

export const ADDING_JOKES = "ADDING_JOKES";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILED = "ADD_FAILED";

export const addJoke = joke => dispatch => {
  dispatch({ type: ADDING_JOKES });
  axios
    .post("https://jokr.herokuapp.com/api/jokes", joke)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FAILED, payload: err });
    });
};
