import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./Reducer/AuthReducer/registerSlice";
import loginReducer from "./Reducer/AuthReducer/loginSlice";

export const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer
    }
})