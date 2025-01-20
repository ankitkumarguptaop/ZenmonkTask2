import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/signin/signin";
import SignUp from "../pages/signup/signup";
import Home from "../pages/home/home";
import Dashboard from "../pages/restraudant-dashboard/dashboard";
import Restraudant from "../pages/restraudant/restraduant";
import Cart from "../pages/cart/cart";
import Order from "../pages/orders/order";

const Router = () => {
  const PrivateRoute = ({ children }) => {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    const restaurantData = JSON.parse(localStorage.getItem("Restaurant"));
    let particularRestaurant = null;
    if (restaurantData) {
      particularRestaurant = restaurantData[currentUser.email];
    }
    if (particularRestaurant) {
      return children;
    }

    return <Navigate to="/" />;
  };

  const PrivateRouteLogin = ({ children }) => {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    const user = JSON.parse(localStorage.getItem("User"));

    let particularuser = null;
    if (user && currentUser) {
      particularuser = user[currentUser.email];
    }
    if (!particularuser) {
      return children;
    }

    return <Navigate to="/home" />;
  };
  const PrivateRouteHome = ({ children }) => {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    const user = JSON.parse(localStorage.getItem("User"));

    let particularuser = null;
    if (user && currentUser) {
      particularuser = user[currentUser.email];
    }
    if (particularuser) {
      return children;
    }

    return <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouteLogin>
            <SignIn />
          </PrivateRouteLogin>
        }
      />
      <Route
        path="/signup"
        element={
          <PrivateRouteLogin>
            <SignUp />
          </PrivateRouteLogin>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRouteHome>
            <Home />
          </PrivateRouteHome>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/restradaunt/:email" element={<Restraudant />} />
      <Route path="/:email/cart" element={<Cart />} />
      <Route path=":user/orders" element={<Order />} />
    </Routes>
  );
};

export default Router;
