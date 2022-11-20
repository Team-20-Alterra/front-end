import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import RegisterPage from '../pages/RegisterPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router