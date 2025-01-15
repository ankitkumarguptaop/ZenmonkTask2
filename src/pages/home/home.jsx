import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/navbar";



const Home = () => {
 const user = JSON.parse(localStorage.getItem("current-user"))


  return (
     <Box className="home-container">
         <Navbar user={user}></Navbar>
     </Box>
  );
};

export default Home;
