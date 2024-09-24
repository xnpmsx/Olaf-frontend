import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 


  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  };
  
  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create the payload
    const payload = {
      username: username, // Adjust according to your API (username or email)
      password: password
    };
  
    try {
      // Send POST request to login API endpoint
      const response = await fetch(`${baseUrl}/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        credentials: 'include',
         // Important: include cookies in the request
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      // Optionally decode the token from cookies
      const token = document.cookie.split('; ').find(row => row.startsWith('access_token='));
      if (token) {
        const decoded = decodeToken(token.split('=')[1]);
        console.log('Decoded Token:', decoded);
      }
  
      // Optionally redirect or do something after successful login
      console.log('Login successful');
      window.location.href='./Feed'
      setError(null); // Clear any previous errors
  
    } catch (error) {
      console.error('Error:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className='border-end' style={{marginTop: '220px'}}>
              <span class="crimson-text-bold-italic" 
                style={{fontSize:"200px",marginLeft:'125px'}}>
                OLAF.
              </span>
              <p className='crimson-text-regular-italic' 
              style={{marginLeft:'125px'}}> 
              Ideas, stories, and knowledge are all creations that can be shaped by your own hands.</p>
            </div>
          </div>
          <div className='col'>
              <div className='card' 
                style={{ marginTop: '180px',border:'none' ,width:'525px' }}>
                <div className='card-body'>
                  <h3 className='crimson-text-bold-italic' style={{fontSize:'80px'}}>Sign in</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputUsername1" 
                        className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername1"
                        aria-describedby="userNameHelp"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update state on change
                      />
                      {/* <div id="emailHelp" 
                        className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" 
                        className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update state on change
                      />
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>} {/* Show error message */}

                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form><br/>

                  <div className='row'>

                    <div className='card p-1 m-1' style={{ width: '60px', height: '60px', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div className='card-body' 
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
                          alt='Icon'
                          style={{ width: '45px', height: '45px' }}
                        />
                      </div>
                    </div>

                    <div className='card p-1 m-1' style={{ width: '60px', height: '60px', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div className='card-body' 
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/600px-2023_Facebook_icon.svg.png'
                          alt='Icon'
                          style={{ width: '45px', height: '45px' }}
                        />
                      </div>
                    </div>
                  
                  </div>


                </div>
              </div>
          </div>
        </div>
        

      </div>
    </>
  );
}
