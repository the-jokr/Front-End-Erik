import { SET_ACTIVE_ITEM } from "../actions";

const initialState = {
    activeItem: {}
};

export const setActItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_ITEM:
            return {
                activeItem: action.payload
            };
        default:
            return state;
    }
};
