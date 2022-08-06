import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components"


const NavBar=styled.div`
width:100%;
margin:auto;
display:flex;
justify-content:space-around;
background-color:black;

`
const Navtabs=styled.button`
color:white;
font-size:25px;
font-weight:600;
padding:20px;
background-color:transparent;
border:none;
text-align:center;
:hover{
    cursor:pointer;
}
`

const Navbar=()=>{

    return(
        <>
        <NavBar>
            <Navtabs onClick={()=>Navigate("/")}>Home</Navtabs>
            <Navtabs onClick={()=>Navigate("/login")}>Login</Navtabs>
            <Navtabs onClick={()=>Navigate("/cart")}>Cart</Navtabs>
            
        </NavBar>
        </>
    )
}
export default Navbar;







