import { Box } from '@mui/material'
import React from 'react'
import "./body.css"
import restraunt from "../../images/restraunt-image.jpg"

const Body = ({restrauants}) => {
 const restaurants = JSON.parse(localStorage.getItem("Restaurant"));

  return (
   <Box className="body">
    {
        Object.keys(restrauants).map((restrauant ,index)=>(<Box className="restaurant-card" key={restrauant}>
            <img src={restraunt} alt="" />
            <Box className="details-container">
            <Box className="restaurant-details">{restaurants[restrauant].firstName}</Box>
            <Box className="restaurant-details">{restaurants[restrauant].email}</Box>
            </Box>
            </Box>
        ))
    }
   </Box>
  )
}

export default Body
