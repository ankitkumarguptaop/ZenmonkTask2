import { Box } from "@mui/material";
import React from "react";
import "./body.css";
import restraunt from "../../images/restraunt-image.jpg";
import front from "../../images/hero-image.avif";
import { useNavigate } from "react-router-dom";

const Body = ({ restrauants }) => {
  const restaurants = JSON.parse(localStorage.getItem("Restaurant"));
  const navigate = useNavigate();

  function openParticularRestraurant(e, restrauant) {
    localStorage.setItem(
      "current-restrauant",
      JSON.stringify({
        email: restrauant,
      })
    );
    navigate(`/restradaunt/${restrauant}`, { state: [restrauant] });
  }

  return (
    <Box className="body">
      <Box className="image-box">
        <img src={front} alt="" />
      </Box>
      <Box className="restaurant-rapper">
        {restrauants &&
          Object.keys(restrauants)?.map((restrauant, index) => (
            <Box
              className="restaurant-card"
              key={restaurants[restrauant].email}
              onClick={(e) =>
                openParticularRestraurant(e, restaurants[restrauant].email)
              }
            >
              <img src={restraunt} alt="" />
              <Box className="details-container">
                <Box className="restaurant-details">
                  {restaurants[restrauant].firstName}
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Body;
