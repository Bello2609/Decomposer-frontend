import React from "react";
import { Box, Select, MD } from "@chakra-ui/react";
import Button from "../../UI/button";
import * as images from "../../images";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";

const Header = ()=>{
    
    const navigate = useNavigate();
    return (
        <>
            <Box width="100%" borderBottom='2px' borderColor='black.200' p={3} display="flex" alignItems="center" justifyContent="space-between">
                    <img src={images.Logo} alt="lartdecomposer" />
                    <Nav />
                    <Select width="150px">
                        <option value='en'>EN</option>
                        <option value='french'>FRENCH</option>
                    </Select>
                    <Button  click={ ()=> navigate("/register") }>Register Now</Button>
            </Box>
        </>
    );
}
export default Header;