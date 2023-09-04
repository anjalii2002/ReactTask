import React from 'react'
import RegistrationPage from './component/RegistrationPage'
import UserProfile from './component/UserProfile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
  
<>
<BrowserRouter>
       
          <Routes>
            
            <Route path="/" element={<RegistrationPage/>}/>
            <Route path="/userprofile" element={<UserProfile/>}/>
          </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App