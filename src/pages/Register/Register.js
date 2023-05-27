import React from "react";
import { Box, Image, Heading, Text, Checkbox, Select } from "@chakra-ui/react";
import * as images from "../../images";
import { css } from "@emotion/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Store/Reducer/AuthReducer/registerSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const registerSchema = Yup.object().shape({
    name: Yup.string().required("Kindly enter your full name"),
    email: Yup.string().email("email").required("Please enter a correct email"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "The password you enter must match "),
    role: Yup.string()

});
const Register = ()=>{
    const dispatch = useDispatch();
    const { isLoading, errorMessage, successMessage } = useSelector(state=> state.register);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: ""
        },
        validationSchema: registerSchema,
        onSubmit: values =>{
            dispatch(register(values));
            // console.log(values);
        }
    })
    const googleSignUp = ()=>{
        window.open("https://decomposer.onrender.com/google/", "_self");
    }

    return(
        <Box width="100%" display="flex" justifyContent="space-between">
            <Box css={styles.container} display="flex" flexDirection="column">
                <Heading my={10} as="h5">
                    Sign Up
                </Heading>
                <Text color="gray">
                    The standard chunk of Lorem Ipsum used since the<br /> 1500s is reproduced.
                </Text>
                <form className="form_container" onSubmit={formik.handleSubmit}>   
                    <div className="input-box">
                        <input className="input" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}  onBlur={formik.handleBlur} />
                        {formik.touched.name && formik.errors.name ? (<Box color="red">{formik.errors.name}</Box>): null}
                        <label className="input-label" htmlFor="name">Name</label>
                    </div>
                    <div className="input-box">
                        <input className="input" name="email" type="email"  onChange={formik.handleChange} value={formik.values.email}  onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email ? (<Box color="red">{formik.errors.email}</Box>) : null}
                        <label className="input-label" htmlFor="email">Email</label>
                    </div>
                    <div className="input-box">
                        <input className="input" name="password" type="password" onChange={formik.handleChange} value={formik.values.password}  onBlur={formik.handleBlur} />
                        {formik.touched.password && formik.errors.password ? (<Box color="red">{formik.errors.password}</Box>) : null}
                        <label className="input-label" htmlFor="password">Password</label>
                    </div>
                    <div className="input-box">
                        <input className="input" name="confirmPassword" type="password" onChange={formik.handleChange} value={formik.values.confirmPassword}  onBlur={formik.handleBlur} />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<Box color="red">{formik.errors.confirmPassword}</Box>) : null}
                        <label className="input-label" htmlFor="password">Confirm Password</label>
                    </div>
                    <div className="input-box">
                        <label htmlFor="roles">select whether you are a buyer or a seller</label>
                        <Select height="51px" name="role" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.role}>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </Select>
                        {formik.touched.role && formik.errors.role ? (<Box color="red">{formik.errors.role}</Box>) : null}
                        
                    </div>
                    <Checkbox>Please send me news and offers as newsletter!</Checkbox>
                    <button className="button" type="submit">{isLoading ? "Loading..." : "Sign up"}</button>
                    
                    <ToastContainer autoClose={2000} />
                </form>
                    <button className="button1" onClick={googleSignUp}><FcGoogle />Get Started with Google</button>
                <Text>Already have an account?&nbsp;<Link style={{"color": "#3D90E2" }}to="/login">Log in</Link> </Text>
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
    },

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
        .input{
            width: 500px;
            height: 51px;
            outline: none;
            border: 1px solid #E6E6E6;
            padding: 20px 15px;
            &:focus{
                border: 2px solid #3D90E2;
            }
            // &:valid + .input-label{
            //     top: -12px;
            // }
            &:not([value=""]) + .input-label{
                top: -12px;
                color: #3D90E2;
                background-color: #fff;
            }
            &:not([value=""]){
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