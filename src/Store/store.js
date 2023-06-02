import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import registerReducer from "./Reducer/AuthReducer/registerSlice";
import loginReducer from "./Reducer/AuthReducer/loginSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["token"]
}
const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: {
        reducers: persistedReducer
    },
    middleware: [thunk]
})
export const persistor = persistStore(store);