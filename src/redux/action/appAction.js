import {
    USER_LOGIN,
    USER_REGISTER,
    USER_LOGOUT,
    GET_USER_DETAILS,
    RESET_STORE,
    UPDATE_USER_INFO
} from "./types";

import axios from '../../constants/axios'
import EndPoints from '../../constants/config'

// GET MY PROFILE
// export const getProfile = (langID, userID) => {
//     return async(dispatch, getState) => {
//         try {
//             const response = await axios.post(
//                 EndPoints.GET_MY_PROFILE, {
//                     param: {
//                         LanguageID: langID,
//                         UserID: userID,
//                     }
//                 },
//             );
//             console.log("myProfile -> response", response)
//             const apiResponse = await response.data;
//             console.log("myProfile -> apiResponse", apiResponse)
//             if (response.status == 200 && apiResponse.StatusCode == 200) {
//                 dispatch({
//                     type: MY_PROFILE,
//                     payload: {
//                         myProfileData: apiResponse.Data,
//                     },
//                 });
//                 return Promise.resolve(apiResponse);
//             } else {
//                 return Promise.reject(apiResponse);
//             }
//         } catch (e) {
//             Promise.reject(e);
//             console.log(e);
//         }
//     };
// };

// export const update_profile = (profileUserData) => {
//     console.log("ProfileData -> profileUserData", profileUserData);
//     return async(dispatch, getState) => {
//         try {
//             const response = await axios.post(
//                 EndPoints.Update_Profile, {
//                     param: {
//                         JSON: profileUserData
//                     }
//                 },
//             );
//             console.log("ProfileData -> response", response)
//             const apiResponse = await response.data;
//             console.log("ProfileData -> apiResponse", apiResponse)
//             if (response.status == 200 && apiResponse.StatusCode == 200) {
//                 dispatch({
//                     type: UPDATE_PROFILE,
//                     payload: {
//                         profileUserData: apiResponse.Data,
//                     },
//                 });
//                 return Promise.resolve(apiResponse);
//             } else {
//                 return Promise.reject(apiResponse);
//             }
//         } catch (e) {
//             Promise.reject(e);
//             console.log(e);
//         }
//     };
// };