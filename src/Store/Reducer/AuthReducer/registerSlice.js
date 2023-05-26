import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const api_url = "http://localhost:9000/api/v1/auth/register";
const initialState = {
    isLoading: false,
    errorMessage: "",
    sucessMessage: ""
}


const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        submitDataStart: (state)=>{
            state.isLoading = true
        },
        submitDataSuccess: (state, action)=>{
            state.isLoading = false;
            state.sucessMessage = action.payload.data.message;
            toast.success(state.sucessMessage);
        },
        submitDataFail: (state, action)=>{
            console.log(action);
            state.isLoading = false;
            state.errorMessage = action.payload.data.message;
            toast.error(state.errorMessage);
        }
    }
    
});

export const register = (data)=>{
    return async (dispatch) =>{
        dispatch(submitDataStart())
        try{
            const res = await axios.post(api_url, data);
            console.log(res.data);
            dispatch(submitDataSuccess(res.data));
            // toast.success(successMessage);
        }catch(err){
            const msg = err.response?.data;
            console.log(msg, "message");
            dispatch(submitDataFail(err.response.data));
            // toast.error();
        }
    }
}
export const { submitDataStart, submitDataSuccess, submitDataFail } = registerSlice.actions;
export default registerSlice.reducer;