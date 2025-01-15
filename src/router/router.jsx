import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/signin/signin'
import SignUp from '../pages/signup/signup'
import Home from '../pages/home/home'

const Router = () => {
  return (
   
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    
  )
}

export default Router
