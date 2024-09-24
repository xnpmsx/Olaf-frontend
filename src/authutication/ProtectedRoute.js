import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute( children , {pass} ) {
  // const token = localStorage.getItem('token');


  // if (!token || isTokenExpired(token)) {
  //   return <Navigate to="/Login" replace />;
  // }

  // const token = localStorage.getItem('token');


  if (!pass) {
    return <Navigate to="/Login" replace />;
  }

  return children;
}

// function isTokenExpired(token) {
//     try {
//       const decoded = jwtDecode(token);
//       const currentTime = Date.now() / 1000;
//       console.log(decoded.exp < currentTime);

//       if(decoded.exp < currentTime){
//         localStorage.removeItem('token');
//       }
      
//       return decoded.exp < currentTime;
//     } catch (error) {
//       return true; // If there is an error decoding, treat the token as expired
//     }
//   }

