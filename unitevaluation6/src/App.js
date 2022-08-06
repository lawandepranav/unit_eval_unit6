import React from 'react';
import Login from './Components/Pages/Login';
import { Route,Routes } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Navbar from './Components/Navbar';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
