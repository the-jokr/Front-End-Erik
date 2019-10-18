export const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";

export const activeItem = item => {
    return { type: SET_ACTIVE_ITEM, payload: item };
};
