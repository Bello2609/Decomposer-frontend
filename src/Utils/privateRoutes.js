import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// this will be responsisble for rediredcting a user that is not authorise to havae access to some pages;
const PrivateRoutes = ({children})=>{
    const { token, isAuthenticated } = useSelector(state=> state.reducers.login);
    console.log(isAuthenticated);
    return(
        isAuthenticated ? children : <Navigate to="/login" />
    );
}
export default PrivateRoutes;