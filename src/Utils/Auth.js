import axios from "axios";
import { store } from "../Store/store";

export const axiosInstance = axios.create({
    baseUrl: `https://decomposer.onrender.com/api/v1`
});

axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken = store.getState().reducers.login.token;
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config
    },
    (error)=>{
        console.log("axios error", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        console.log("response error", error);
        return Promise.reject(error);
    }
)