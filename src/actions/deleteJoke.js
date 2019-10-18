import { axiosWithAuth } from "../utils/axiosWithAuth";

export const DEL_START = "DEL_START";
export const DEL_SUCCESS = "DEL_SUCCESS";
export const DEL_FAILED = "DEL_FAILED";

export const delJoke = joke => dispatch => {
    dispatch({ type: DEL_START });
    return axiosWithAuth()
        .delete(`https://the-joker-spa.herokuapp.com/api/jokes/${joke.id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: DEL_SUCCESS, payload: joke.id });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: DEL_FAILED, payload: err });
        });
};

export const DELSAVE_START = "DELSAVE_START";
export const DELSAVE_SUCCESS = "DELSAVE_SUCCESS";
export const DELSAVE_FAILED = "DELSAVE_FAILED";

export const delSaveJoke = joke => dispatch => {
    dispatch({ type: DELSAVE_START });
    return axiosWithAuth()
        .delete(
            `https://the-joker-spa.herokuapp.com/api/wallet/favorite/${joke.saved_id}`
        )
        .then(res => {
            dispatch({ type: DELSAVE_SUCCESS, payload: res });
        })
        .catch(err => {
            dispatch({ type: DELSAVE_FAILED, payload: err });
        });
};
