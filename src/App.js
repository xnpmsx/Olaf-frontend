import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './authutication/Login';
import Register from './authutication/Register';
import Feed from './pages/Feed';
import ProtectedRoute from './authutication/ProtectedRoute';

const App = () => {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Feed" element={<Feed/>} />
          <Route path="/about" element={ProtectedRoute(<About />)} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
