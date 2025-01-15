import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/signin/signin";
import SignUp from "../pages/signup/signup";
import Home from "../pages/home/home";
import Dashboard from "../pages/restraudant-dashboard/dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
