import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// Pages 
const Home = lazy( ()=> import("./pages/Home/Home") );
const Register = lazy(()=>import("./pages/Register/Register"));
const Login = lazy(()=> import("./pages/Login/Login"));
const Layout = lazy( ()=> import ("./pages/Layout/Layout") );
const ResetPassword = lazy(()=> import("./pages/ResetPassword/ResetPassword"));
const UpdatePassword = lazy(()=> import("./pages/UpdatePassword/UpdatePassword"));
const Explore = lazy(()=> import("./pages/Explore/Explore"));

//layout


const Router = ()=>{
    return (
        <>
        <Suspense>
            <Routes>
                <Route path="/" element={
                    <Suspense>
                        <Layout>
                            <Home />
                        </Layout>
                    </Suspense>
                    } 
                />
                <Route path="/register" element={
                    <Suspense>
                        <Layout>
                            <Register />
                        </Layout>
                    </Suspense>
                } />
                <Route path="/login" element={
                    <Suspense>
                        <Layout>
                            <Login />
                        </Layout>
                    </Suspense>
                } />
                <Route path="/forget-password" element={
                    <Suspense>
                        <Layout>
                            <ResetPassword />
                        </Layout>
                    </Suspense>
                } />
                <Route path="/update-password" element={
                    <Suspense>
                        <Layout>
                            <UpdatePassword />
                        </Layout>
                    </Suspense>
                } />
                 <Route path="/explore" element={
                    <Suspense>
                        <Layout>
                            <Explore />
                        </Layout>
                    </Suspense>
                } />
            </Routes>
        </Suspense>
            
        </>
    );
}
export default Router;
