import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Login from './authutication/Login';
// import Register from './authutication/Register';
import Feed from './pages/Feed';
import View from './posts/View/Views';
import AuthMiddleware from './middleware/Auth';
import Loginauth from './authutication/Loginauth';
import Registerauth from './authutication/Registerauth';
// import Home from './views/Home';
import User from './authutication/userauth';
import PersistLogin from './components/PersistLogin';

// import ProtectedRoute from './authutication/ProtectedRoute';


const App = () => {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<PersistLogin />}>
              <Route path="/Feed" element={<Feed />} />
              <Route path="/about" element={(<About/>)} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/view/:id" element={<View />} />

              <Route index exact element={<Home />}></Route>

              <Route path='/auth'>
                <Route path='login' element={<Loginauth />}></Route>

                <Route path='register' element={<Registerauth />}></Route>

                <Route path='usermidlw' element={<AuthMiddleware />}></Route>

                <Route index element={<User />}></Route>

              </Route>

              </Route>
        
        <Route path='*' element={<Navigate to='/' />}></Route>
        
      </Routes>
    </Router>
  );
};

export default App;
