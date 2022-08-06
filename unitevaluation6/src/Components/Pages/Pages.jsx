import React from 'react'
import {Route,Routes} from "react-router-dom"
import  Home from '../Home'
import { PrivateRoute } from '../Private'
import Login from './Login'


 const Pages = () => {
  return (
    <div>
       <Routes>
      
        <Route exact path='/' element={<PrivateRoute><Home/></PrivateRoute> }/>
        <Route path='/login' element={<Login/>}/>
        
       </Routes>  
    </div>
  )
}
export default Pages;