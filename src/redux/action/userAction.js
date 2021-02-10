import {
    USER_LOGIN,
    RESET_STORE,
    USER_LOGOUT,
    USER_REGISTER,
    GET_USER_DETAILS,
    UPDATE_PROFILE,
} from "./types";

import axios from '../../constants/axios';
import EndPoints from '../../constants/config';
import {AsyncStorage} from 'react-native';

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

//Logout Endpoint
export const logout_user = () => {
    return async(dispatch) => {
        try {
            const response = await axios.post(
                EndPoints.LOGOUT
            );
            console.log("logout_user -> response", response);
        } catch (e) {
            Promise.reject(e);
            console.log(e);
        }
    };
};