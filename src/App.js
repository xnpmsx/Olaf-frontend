import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './authutication/Login';
import Register from './authutication/Register';
import Foryou from './pages/foryou';
import Following from './pages/following';
import ProtectedRoute from './authutication/ProtectedRoute';
import Profile from './pages/Profile';
// import Culture from './content/Culture';
// import Life from './content/Life';
// import Work from './content/Work';
// import Society from './content/Society';
// import Technology from './content/Technology';
// import SoftwareDevelopment from './content/SoftwareDevelopment';
import AllContent from './pages/allContent';
import Content from './pages/Content';

const App = () => {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foryou" element={<Foryou/>} />
          <Route path="/following" element={<Following />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/allContent" element={<AllContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/Content" element={<Content />} /> */}
          <Route path="/content/:title" element={<Content />} />
          <Route path="/content/:postId" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
