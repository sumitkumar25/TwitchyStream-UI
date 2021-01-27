import { combineReducers } from "redux";
import authReducer from './auth.reducer';
import streamReducer from "./stream.reducer";
import { reducer } from 'redux-form';
export default combineReducers({
    auth: authReducer,
    form: reducer,
    streams: streamReducer
})