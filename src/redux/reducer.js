import { combineReducers } from "@reduxjs/toolkit";
import FetchUserData from "../redux/slices/UserDataSlice";


export const rootReducer=combineReducers({
    UsersDetails:FetchUserData
})