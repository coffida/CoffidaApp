import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import AppReducer from './appReducer';
import { RESET_STORE } from '../action/types';
import { appDefaultReducer } from './defaultReducer';

const appReducer = combineReducers({
    user: UserReducer,
    app: AppReducer
});

export default function rootReducer(state, action) {
    let finalState = appReducer(state, action);
    if (action.type === RESET_STORE) {
        finalState = appDefaultReducer;
    }
    return finalState;
}