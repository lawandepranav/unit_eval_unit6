import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logoutSuccess } from "../Redux/Auth/Action";

const Navbar = () => {


  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logoutSuccess());
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, padding:"20px", gap:"100px" }}>
            <Link style={{color:"white",textDecoration:"none",fontSize:"20px",fontWeight:"600"}} to={"/"}>Home</Link>
            <Link style={{color:"white",textDecoration:"none",fontSize:"20px",fontWeight:"600"}} to={"/cart"}>Cart</Link>
          </Box>
          {token ? (
            <Box
              onClick={handlelogout}
              style={{ cursor: "pointer",color:"white",textDecoration:"none",fontSize:"20px",fontWeight:"600" }}
              sx={{ flexGrow: 0 }}
            >
              Logout
            </Box>
          ) : (
            <Link style={{color:"white",textDecoration:"none",fontSize:"20px",fontWeight:"600"}} to="/login">
              <Box style={{ cursor: "pointer" }} sx={{ flexGrow: 0 }}>
                Login
              </Box>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;