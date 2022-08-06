import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children}) => {
    const token=useSelector(state=>state.auth.token)
   
        React.useEffect(()=>{

 if (token ) {
      return children
    }
        },[])
   
      
    return <Navigate to="/" />
  }
