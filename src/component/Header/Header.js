import React from "react";
import { Box, Select } from "@chakra-ui/react";
import Button from "../../UI/button";
import * as images from "../../images";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=>{
    
    const navigate = useNavigate();
    const { token, isAuthenticated } = useSelector(state=> state.reducers.login)
    return (
        <>
            <Box width="100%" borderBottom='2px' borderColor='black.200' p={3} display="flex" alignItems="center" justifyContent="space-between">
                    <img src={images.Logo} alt="lartdecomposer" />
                    <Nav />
                    <Select width="150px">
                        <option value='en'>ENGLISH</option>
                        <option value='french'>FRENCH</option>
                    </Select>
                    {
                        isAuthenticated
                         ? 
                         <Button  click={ ()=> navigate("/logout") }>Log out</Button> :
                         <Button  click={ ()=> navigate("/register") }>Register Now</Button>
                    }
            </Box>
        </>
    );
}
export default Header;