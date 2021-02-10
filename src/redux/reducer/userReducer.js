import {
    USER_LOGIN,
    USER_REGISTER,
    UPDATE_USER_INFO,
    GET_USER_DETAILS
} from "../action/types";
import { appDefaultReducer } from "./defaultReducer";

const INITIAL_STATE = appDefaultReducer.user;
// we get the response from the APIS and save them in the reducers to get access globally in the app
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN:
        {
            return {
                ...state,
                user: action.payload.userData,
                isLogin: true,
            };
        }

        case USER_REGISTER:
        {
            return {
                ...state,
                register: action.payload.registerUserData,
            };
        }

        case GET_USER_DETAILS:
        {
            return {
                ...state,
                get_profile: action.payload.GetProfileUserData,
            };
        }

        case UPDATE_USER_INFO:
        {
            return {
                ...state,
                update_profile: action.payload.ProfileUserData,
            };
        }

        default:
            return state;
    }
};