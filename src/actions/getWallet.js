import { axiosWithAuth } from "../utils/axiosWithAuth";
export const FETCHING_WALLET = "FETCHING_WALLET";
export const GET_WALLET_SUCCESS = "GET_WALLET_SUCCESS";
export const WALLET_FAILED = "WALLET_FAILED";

export const getWallet = user => dispatch => {
    dispatch({ type: FETCHING_WALLET });
    return axiosWithAuth()
        .get(`https://the-joker-spa.herokuapp.com/api/wallet/${user}`)
        .then(res => {
            dispatch({ type: GET_WALLET_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: WALLET_FAILED, payload: err });
        });
};
