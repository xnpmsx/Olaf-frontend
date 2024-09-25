import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './authutication/Login';
import Register from './authutication/Register';
import Feed from './pages/Feed';
import View from './posts/View/Views';

import ProtectedRoute from './authutication/ProtectedRoute';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ถ้าไม่ authenticated จะไปที่หน้า Login */}
        <Route 
          path="/Feed" 
          element={ProtectedRoute(<Feed />)} 
        />

        <Route 
          path="/about" 
          element={ProtectedRoute(<About/>)} 
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/view/:id" element={<View />} />
        
        {/* หน้าล็อกอิน */}
        <Route path="/Login" element={<Login  />} />
        
        {/* หน้าลงทะเบียน */}
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
