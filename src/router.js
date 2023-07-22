import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import  PrivateRoutes from "./Utils/privateRoutes";
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
const UserProfile = lazy(()=> import("./pages/UserProfile/UserProfile"));
const Orders = lazy(()=>import("./pages/Orders/Orders"));
const Jobs = lazy(()=>import("./pages/Jobs/Jobs"));
const Dashboard = lazy(()=>import("./pages/Dashboard/Dashboard"));
const Help = lazy(()=>import("./pages/Help/Help"));
// const Error = lazy(()=>import("./pages/Error/Error"));
//layout


const Router = ()=>{
    return (
        <>
        
            <Routes>
                {/* <Route path="/" element={
                    <Suspense>
                        <Layout>
                            <Error />
                        </Layout>
                    </Suspense>
                    } 
                /> */}
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
                            <PrivateRoutes>
                                <Explore />
                            </PrivateRoutes>
                            
                        </Layout>
                    </Suspense>
                } />
                <Route path="/user-profile" element={
                    <Suspense>
                        <Layout>
                            <PrivateRoutes>
                                <UserProfile />
                            </PrivateRoutes>
                            
                        </Layout>
                    </Suspense>
                } />
                 <Route path="/category" element={
                    <Suspense>
                        <Layout>
                            <PrivateRoutes>
                                <Category />
                            </PrivateRoutes>
                        </Layout>
                    </Suspense>
                } />
                <Route path="/category/:id" element={
                    <Suspense>
                        <Layout>
                            <PrivateRoutes>
                                <CategoryId />
                            </PrivateRoutes>
                        </Layout>
                    </Suspense>
                } />
                <Route path="/orders" element={
                    <Suspense>
                        <Layout>
                            <PrivateRoutes>
                                <Orders />
                            </PrivateRoutes>
                        </Layout>
                    </Suspense>
                } />
                <Route path="/jobs" element={
                    <Suspense>
                        <Layout>
                            <PrivateRoutes>
                                <Jobs />
                            </PrivateRoutes>
                        </Layout>
                    </Suspense>
                } />
                <Route path="/dashboard" element={
                    <Suspense>
                        <Layout>
                            <PrivateRoutes>
                                <Dashboard />
                            </PrivateRoutes>
                        </Layout>
                    </Suspense>
                } />
                <Route path="/help" element={
                    <Suspense>
                        <Layout>
                            <Help />
                        </Layout>
                    </Suspense>
                } />
            </Routes>
        
            
        </>
    );
}
export default Router;
