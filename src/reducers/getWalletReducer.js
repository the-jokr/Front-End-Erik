import { FETCHING_WALLET, GET_WALLET_SUCCESS, WALLET_FAILED } from "../actions";

const initialState = {
    fetchingWallet: true,
    walletItems: [],
    error: null
};

export const getWalletReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_WALLET:
            return {
                ...state,
                fetchingWallet: true,
                error: null
            };
        case GET_WALLET_SUCCESS:
            return {
                ...state,
                fetchingWallet: false,
                error: null,
                walletItems: action.payload
            };
        case WALLET_FAILED:
            return {
                ...state,
                fetchingWallet: false,
                error: action.payload
            };
        default:
            return state;
    }
};
