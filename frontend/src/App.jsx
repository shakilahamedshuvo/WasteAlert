import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Start from '../pages/Start'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Otp from '../pages/Otp'
const App = () => {
  return (
    <Routes>
      <Route path='/'  element={<Start />}  />
      <Route path='/signup' element={<SignUp />}  />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='otp-verification' element={<Otp />} />
    </Routes>
  )
}

export default App;
