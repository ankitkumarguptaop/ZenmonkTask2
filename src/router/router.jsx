import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/signin/signin'
import SignUp from '../pages/signup/signup'

const Router = () => {
  return (
   
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    
  )
}

export default Router
