import {
    RESET_STORE,
} from "../redux/action/types";

export const logout_user = () => {
    return (dispatch) => {
        return dispatch({
            type: RESET_STORE,
        });
    };
};