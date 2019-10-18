import axios from "axios";

export const FETCHING_JOKES = "FETCHING_JOKES";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAIL = "FETCHING_FAIL";

export const getJokes = () => dispatch => {
    dispatch({ type: FETCHING_JOKES });
    axios
        .get("https://the-joker-spa.herokuapp.com/api/jokes")
        .then(res => {
            dispatch({ type: FETCHING_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_FAIL, payload: err });
        });
};
