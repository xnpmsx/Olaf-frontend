import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './authutication/Login';
import Register from './authutication/Register';
import Feed from './pages/Feed';
import ProtectedRoute from './authutication/ProtectedRoute';
import View from './posts/View/Views';
const baseUrl = process.env.REACT_APP_BASE_URL;


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const checkUserStatus = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/check/`, {
        method: 'GET',
        credentials: 'include', // Include cookies
      });
  
      if (!response.ok) {
        throw new Error('Not authenticated');
      }

      const data = await response.json();
      setIsAuthenticated(true);
      setUserData(data); // Store user data if needed

      // If you need to set the CSRF token to a variable:
      const csrfToken = response.headers.get("X-CSRFToken");
      if (csrfToken) {
        // Store the CSRF token if needed
        // e.g., localStorage.setItem('csrfToken', csrfToken);
      }

    } catch (error) {
      console.error('Error checking user status:', error);
      setIsAuthenticated(false); // Update state to reflect unauthenticated status
    }
  };

  useEffect(() => {
    checkUserStatus();
  }, []); // Run only on component mount

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Feed" element={!isAuthenticated ? <Feed /> : <Navigate to="/Login" />} />
        <Route path="/about" element={!isAuthenticated ? <About /> : <Navigate to="/Login" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
