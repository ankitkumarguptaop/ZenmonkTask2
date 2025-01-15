import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import Body from "../../components/body/body";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("current-user"));

  const restaurants = JSON.parse(localStorage.getItem("Restaurant"));

  //  const [allRestaurants ,setAllRestaurants] =useState({restaurants})
  // let array =[restaurants];

  //  console.log("Array",Object.keys(restaurants))
  // if(restaurant){

  //   // let restaurantData = restaurant;
  // console.log( "Array 2 " ,restaurants)
  //   console.log( "Array 3" ,array)
  // }

  return (
    <Box className="home-container">
      <Navbar user={user}></Navbar>
      <Body restrauants={restaurants}></Body>
    </Box>
  );
};

export default Home;
