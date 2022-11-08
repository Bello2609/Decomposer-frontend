import React from "react";
import { Box, Image, Heading, Text, Checkbox } from "@chakra-ui/react";
import * as images from "../../images";
import { css } from "@emotion/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
  
const Register = ()=>{
    return(
        <Box width="100%" display="flex" justifyContent="space-between">
            <Box css={styles.container} display="flex" flexDirection="column">
                <Heading my={10} as="h5">
                    Sign Up
                </Heading>
                <Text color="gray">
                    The standard chunk of Lorem Ipsum used since the<br /> 1500s is reproduced.
                </Text>
                <form className="form_container">   
                    <div className="input-box">
                        <input className="input"  type="text"  />
                        <label className="input-label" for="name">Name</label>
                    </div>
                    <div className="input-box">
                        <input className="input"  type="email"  />
                        <label className="input-label" for="email">Email</label>
                    </div>
                    <div className="input-box">
                        <input className="input"  type="password"  />
                        <label className="input-label" for="password">Password</label>
                    </div>
                    <Checkbox>Please send me news and offers as newsletter!</Checkbox>
                    <button className="button" type="submit">Sign Up</button>
                    <button className="button1" type="submit"><FcGoogle />Sign Up with Google</button>
                </form>
                <Text>Already have an account?&nbsp; <Link style={{"color": "#3D90E2" }}to="/login">Log in</Link> </Text>
            </Box>
            <Box>
                <Image height="100vh" src={images.rectangle47} alt="logo" /> 
            </Box>
        </Box>
    );
}
const styles = {
    container: css`
    padding-top: 50px;
    padding-left: 200px;
    font-family: Futura PT;

    .form_container{
        width: 500px;
        height: auto;
        margin-top: 15px;
        

        .button{
            width: 500px;
            height: 51px;
            background: #1E3231;
            color: #fff;
            margin-top: 10px;
        }
        .button1{
            width: 500px;
            height: 51px;
            background: #fff;
            color: #1E3231;
            margin-top: 10px;
            border: 1px solid #E6E6E6;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .input{
            width: 500px;
            height: 51px;
            outline: none;
            border: 1px solid #E6E6E6;
            padding: 20px 15px;
            &:focus{
                border: 2px solid #3D90E2;
            }
            &:focus + .input-label{
                color: #3D90E2;
                top: -12px;
                background-color: #fff;
                outline: none;
            }
            &:active + .input-label{
                color: #3D90E2;
                top: -12px;
                background-color: #fff;
                outline: none;
            }
        }
        .input-box {
            position: relative;
            margin-bottom: 15px;
            &:focus{
                border: 2px solid #3D90E2;
            }
            &:active .input-label{
                color: #3D90E2;
            }
        }
        .input-label {
            position: absolute; 
            top: 10px;
            left: 8px; 
            transition: .25s;
            padding: 0 8px;
            width: 90px;
            white-space: nowrap;
            &:focus:{
                top: -12px;
            }

        }
    }

   
`,
   

        
    
   
}
export default Register;