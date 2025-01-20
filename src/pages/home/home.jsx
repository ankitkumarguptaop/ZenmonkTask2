import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import Body from "../../components/home-body/body";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("current-user"));
  const restaurants = JSON.parse(localStorage.getItem("Restaurant"));


  return (
    <Box className="home-container">
      <Navbar user={user}></Navbar>
      <Body restrauants={restaurants}></Body>
    </Box>
  );
};

export default Home;
