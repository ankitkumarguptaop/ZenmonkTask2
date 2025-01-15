import React from 'react'
import { Box ,Button } from '@mui/material'
import swiggy from "../../images/swiggy.png"
import "./navbar.css"
import { useNavigate } from 'react-router-dom'
const Navbar = ({user}) => {
const Navigate = useNavigate();
function handleLogout(){
  localStorage.setItem("current-user",null);
  Navigate("/");
}
  return (
    <>
    {user && <>
    <Box className="navbar-container">
        <Box className="swiggy-logo"> <img src={swiggy} alt="" /></Box>
         <Box className ="current-user-name">
          Welcome {user.firstName} {user.lastName}
         </Box>
          {/* <Box className ="current-user-email">
            {user.email}
         </Box> */}
         <Button  disableRipple disableElevation className="logout-button" onClick={handleLogout}> Log out</Button>
    </Box>
    </>}
    </>
          
  )
}

export default Navbar
