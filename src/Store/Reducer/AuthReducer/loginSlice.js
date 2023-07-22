import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../Utils/Auth";
import { Navigate } from "react-router-dom";

const api_url = "https://decomposer.onrender.com/api/v1/auth/login";
const initialState = {
    isLoading: false,
    errorMessage: "",
    isAuthenticated: "",
    token: "",
    userData: []

}
const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        loginStart: (state)=>{
            state.isLoading = true;
        },
        loginSuccess: (state, action)=>{
            console.log(action);
            state.isLoading = false;
            state.token = action.payload.data.token;
            state.isAuthenticated = true;
            toast.success("you are logged in successfully");
        },
        loginFail: (state, action)=>{
            state.isLoading = false;
            state.isAuthenticated = false;
            state.errorMessage = action.payload.data.message;
            toast.error(state.errorMessage);
        }
    }
});
export const login = (data)=>{
    return async (dispatch)=>{
        dispatch(loginStart());
        try{
            const res = await axiosInstance.post(api_url, data);
            dispatch(loginSuccess(res.data));
            window.location.href = "/user-profile";
        }catch(err){
            const msg = err.response?.data;
            dispatch(loginFail(msg));
        }
    }
}
export const { loginStart, loginSuccess, loginFail } = loginSlice.actions;
export default loginSlice.reducer;