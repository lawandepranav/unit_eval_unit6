import React from 'react';
import Login from './Components/Pages/Login';
import { Route,Routes } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Payment from './Components/Payment';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path='/' element={<Payment />} />
      <Route path='/cart' element={<PrivateRoute ><Cart /></PrivateRoute>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
