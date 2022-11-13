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
const Category = lazy(()=>import("./pages/Category/Category"));
const CategoryId = lazy(()=>import("./pages/Category/CategoryId"));

//layout


const Router = ()=>{
    return (
        <>
        
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
                 <Route path="/category" element={
                    <Suspense>
                        <Layout>
                            <Category />
                        </Layout>
                    </Suspense>
                } />
                <Route path="/category/:id" element={
                    <Suspense>
                        <Layout>
                            <CategoryId />
                        </Layout>
                    </Suspense>
                } />
            </Routes>
        
            
        </>
    );
}
export default Router;
