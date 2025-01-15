import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../components/navbar/navbar'

const Dashboard = () => {
 const user = JSON.parse(localStorage.getItem("current-user"))
  return (
    <Box className="dashboard-container">
       <Navbar user={user} ></Navbar>
       
    </Box>
  )
}

export default Dashboard
