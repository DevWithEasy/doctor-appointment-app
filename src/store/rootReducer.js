import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import appointmentSlice from "./slice/appointmentSlice";

const rootReducer = combineReducers({
    auth : authSlice,
    appointment : appointmentSlice
})

export default rootReducer