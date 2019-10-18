import { axiosWithAuth } from "../utils/axiosWithAuth";
export const FETCHING_USER = "FETCHING_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const USER_FAILED = "USER_FAILED";

export const getUser = () => dispatch => {
    dispatch({ type: FETCHING_USER });
    return axiosWithAuth()
        .get(`https://the-joker-spa.herokuapp.com/api/auth`)
        .then(res => {
            console.log(res);
            dispatch({ type: GET_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: USER_FAILED, payload: err });
        });
};
