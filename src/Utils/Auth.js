import axios from "axios";


export const axiosInstance = axios.create({
    baseUrl: `https://decomposer.onrender.com/api/v1`
});

axiosInstance.interceptors.request.use(
    (config)=>{
        
    },
    (error)=>{
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        return Promise.reject(error);
    }
)