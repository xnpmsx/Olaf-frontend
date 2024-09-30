import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Profile() {

  return (
    <>
      <Navbar />
      <div className='container'><br />
          <div className="row">
              <div className='col-8'>
                  <div className='col border-bottom'>
                    <div className='card' style={{border:'none'}}>
                      <div className='card-body'>
                        <div className='row'>
                            <div className='col-3'>
                              <img 
                                src='https://via.placeholder.com/150' 
                                alt='profile' 
                                style={{borderRadius: '50%', width:'150px', height:'150px'}}
                              />
                            </div>
                            <div className='col-8'>
                              <h4 style={{fontWeight:'bold', fontSize:'24px'}}>Nattapat Phungphugdee</h4>
                              <p style={{fontSize:'18px', opacity:'80%'}}>Full Stack Developer | JavaScript Enthusiast</p>
                              <p style={{fontSize:'14px', opacity:'60%'}}>Bangkok, Thailand</p>
                              <div className='m-1' style={{fontSize:'12px'}}>
                                <img className='m-1' 
                                  src='https://cdn4.iconfinder.com/data/icons/essentials-72/24/029_-_Star-512.png' 
                                  alt='star'
                                  style={{width:'18px',height:'18px'}}
                                />
                                <span className='m-1'> 5.0 Rating</span>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col border-bottom'>
                    <h5 style={{fontWeight:'bold'}}>About Me</h5>
                    <p>
                      Passionate Full Stack Developer with 5+ years of experience in building web applications using JavaScript, React, Node.js, and more. I enjoy solving complex problems and constantly learning new technologies. In my free time, I contribute to open source projects and write technical articles.
                    </p>
                  </div>

                  <div className='col border-bottom'>
                    <h5 style={{fontWeight:'bold'}}>Recent Articles</h5>
                    <div className='card' style={{border:'none'}}>
                      <div className='card-body'>
                        <div className='row'>
                            <div className='col-8'>
                              <p style={{fontSize:'14px'}}>Nattapat Phungphugdee</p>
                              <h4 style={{fontWeight:'bold',fontSize:'24px'}}>
                                5 amazing new JavaScript features in ES15 (2024)
                              </h4>
                              <p style={{fontSize:'18px',opacity:'60%'}}>A look at the exciting new features in JavaScript ES15 (2024).</p>
                                  <p className='m-1' style={{fontSize:'12px'}}>
                                    <img className='m-1' 
                                      src='https://cdn4.iconfinder.com/data/icons/essentials-72/24/029_-_Star-512.png' 
                                      alt='star'
                                      style={{width:'18px',height:'18px'}}
                                    />
                                    
                                    <span className='m-1' style={{fontWeight:'bold'}}> Jan 3</span>
                                    
                                    <img className='m-1' 
                                      src='https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-256.png' 
                                      alt='views'
                                      style={{width:'18px',height:'18px'}}
                                    />
                                    
                                    <span className='m-1'> 1.5k Views </span>
                                    
                                    <img className='m-1' 
                                      src='https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/comment-512.png' 
                                      alt='comments'
                                      style={{width:'18px',height:'18px'}}
                                    />

                                    <span className='m-1'> 15 Comments</span>

                                  </p>
                            </div>
                            <div className='col-3'>
                              <img src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*IPn6YG_9vnMs3vktlz1x5A.png' 
                                alt='article' 
                                style={{width:'240px',height:'150px'}}
                              />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              
              <div className='col-4 border-start'>
                  <div className='card' style={{border:'none'}}>
                    <div className='card-body'>
                      {/* <p>Skills</p>
                      <ul style={{fontSize:'16px'}}>
                        <li>JavaScript (ES6+)</li>
                        <li>React & Redux</li>
                        <li>Node.js & Express</li>
                        <li>MongoDB & SQL</li>
                        <li>REST & GraphQL APIs</li>
                      </ul> */}
                    <p>username : </p>
                    <p>password : </p>
                    <p>email : </p>
                    <p>FirstName : </p>
                    <p>LastName : </p>
                    <p>phone : </p>
                    </div>
                  </div>

                  {/* <div className='card' style={{border:'none'}}>
                    <div className='card-body'>
                      <p>Contact</p>
                      <p>Email: nattapat@example.com</p>
                      <p>LinkedIn: <a href="#">linkedin.com/in/nattapat</a></p>
                    </div>
                  </div> */}
              </div>
              
          </div>
        
      </div>
      
      <Footer />

    </>
  )
};
