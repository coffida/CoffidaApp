import {
    USER_LOGIN,
    RESET_STORE,
    USER_REGISTER,
    GET_USER_DETAILS,
    UPDATE_PROFILE,
} from "./types";

import axios from '../../constants/axios';
import EndPoints from '../../constants/config';

// Login endpoint with POST method
export const loginUser = (userData) => {
    console.log("loginUser -> userData", userData)
    return async(dispatch, getState) => {
        try {
            const response = await axios.post(
                EndPoints.LOGIN, 
                {
                    userData
                },
            );
            console.log("loginUser -> response", response)
            const apiResponse = await response.data;
            console.log("loginUser -> apiResponse", apiResponse)
            if (apiResponse.user_id && apiResponse.session_token) {
                dispatch({
                    type: USER_LOGIN,
                    payload: {
                        userData: apiResponse,
                    },
                });
                return Promise.resolve(apiResponse);
            } else {
                return Promise.reject(apiResponse);
            }
        } catch (e) {
            Promise.reject(e);
            console.log(e);
        }
    };
};

// Add new user endpoint
export const register_user = (registerUserData) => {
    console.log("registerUser -> userData", registerUserData)
    return async(dispatch, getState) => {
        try {
            const response = await axios.post(
                EndPoints.REGISTER, 
                {
                    registerUserData
                },
            );
            console.log("registerUser -> response", response)
            const apiResponse = await response.data;
            console.log("registerUser -> apiResponse", apiResponse)
            if (apiResponse.user_id) {
                dispatch({
                    type: USER_REGISTER,
                    payload: {
                        registerUserData: apiResponse,
                    },
                });
                return Promise.resolve(apiResponse);
            } else {
                return Promise.reject(apiResponse);
            }
        } catch (e) {
            Promise.reject(e);
            console.log(e);
        }
    };
};

//Logout
export const logout_user = () => {
    return (dispatch) => {
        return dispatch({
            type: RESET_STORE,
        });
    };
};

// Get Profile
export const get_user_profile = (GetProfileUserData) => {
    console.log("get_user_profile -> userData", GetProfileUserData)
    return async(dispatch, getState) => {
        try {
            const response = await axios.post(
                EndPoints.GET_USER_INFO, 
                {
                    GetProfileUserData
                },
            );
            console.log("get_user_profile -> response", response)
            const apiResponse = await response.data;
            console.log("get_user_profile -> apiResponse", apiResponse)
            if (apiResponse.user_id) {
                dispatch({
                    type: GET_USER_DETAILS,
                    payload: {
                        GetProfileUserData: apiResponse,
                    },
                });
                return Promise.resolve(apiResponse);
            } else {
                return Promise.reject(apiResponse);
            }
        } catch (e) {
            Promise.reject(e);
            console.log(e);
        }
    };
};

// Update Profile
export const update_user_profile = (ProfileUserData) => {
    console.log("update_user_profile -> userData", ProfileUserData)
    return async(dispatch, getState) => {
        try {
            const response = await axios.put(
                EndPoints.UPDATE_USER_INFO, 
                {
                    ProfileUserData
                },
            );
            console.log("update_user_profile -> response", response)
            const apiResponse = await response.data;
            console.log("update_user_profile -> apiResponse", apiResponse)
            if (apiResponse.user_id) {
                dispatch({
                    type: UPDATE_PROFILE,
                    payload: {
                        ProfileUserData: apiResponse,
                    },
                });
                return Promise.resolve(apiResponse);
            } else {
                return Promise.reject(apiResponse);
            }
        } catch (e) {
            Promise.reject(e);
            console.log(e);
        }
    };
};