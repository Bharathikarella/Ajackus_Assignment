import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";


export const Store=configureStore({
    reducer:rootReducer
})