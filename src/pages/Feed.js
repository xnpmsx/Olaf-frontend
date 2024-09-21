import React, { useEffect, useState } from 'react'
import Navbar from '../components/Nav/Navbar'
import Navtype from '../components/Nav/Navtype'
import Footer from '../components/Footer';
import { Iconpath } from '../components/Iconpath';
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Feed() {
  const [p_data, setp_data] = useState([]);
  const [imgSrc, setImgSrcs] = useState([]);
  const [error, setError] = useState(null); 
  const Ic = Iconpath()
  const star = Ic[0]
  const Like = Ic[1]
  const comment = Ic[2]

  const redirect = (s) =>{
    window.location.href =`/view/${s}`
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${baseUrl}/posts/`, {
          method: 'GET',
        });
  
        if (!response.ok) {
          throw new Error('Fetching posts failed');
        }
  
        const data = await response.json();
  
        const calculateTimePassed = (postDate) => {
          const postDateTime = new Date(postDate);
          const now = new Date();
  
          const timeDiff = now - postDateTime;
          const diffHours = Math.floor(timeDiff / (1000 * 60 * 60)); 
          // Convert timeDiff from milliseconds to hours
          const diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); 
          // Calculate remaining minutes
  
          if (diffHours < 24) {
            if (diffHours === 0) {
              return `${diffMinutes} minutes ago`;
            }
            return `${diffHours} hours and ${diffMinutes} minutes ago`;
          } else {
            const diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 
            // Convert timeDiff from milliseconds to days
  
            if (diffDays < 30) {
              return `${diffDays} days ago`;
            } else if (diffDays < 365) {
              const diffMonths = Math.floor(diffDays / 30);
              return `${diffMonths} months ago`;
            } else {
              const diffYears = Math.floor(diffDays / 365);
              return `${diffYears} years ago`;
            }
          }
        };
  
        // Map the data to include specific fields and calculate time passed
        const filteredData = data.map(post => ({
          post_id: post.post_id,
          user: post.user,
          header: post.header,
          short: post.short,
          image: post.image,
          post_datetime: calculateTimePassed(post.post_datetime), 
          // Calculate the elapsed time with hours and minutes
        }));
  
  
        // Limit to the latest 10 posts
        const latestPosts = filteredData.length > 10 ? filteredData.slice(-10) : filteredData;
  
        setp_data(latestPosts);
  
        // Set valid images after fetching data
        const validImages = latestPosts.map(post => post.image || 
          'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1Eq0WTubrn1gd_NofdVtJg.png');
        setImgSrcs(validImages);
  
      } catch (error) {
        console.error('Error:', error);
        setError('Fetching posts failed. Please try again.');
      }
    };
  
    fetchPosts();
  }, []); // Run only on component mount
  
  useEffect(() => {
    if (p_data.length > 0) { // Ensure posts data is available before trying to fetch user data
      const fetchUserData = async () => {
        try {
          const response = await fetch(`${baseUrl}/users/`, {
            method: 'GET',
          });
  
          if (!response.ok) {
            throw new Error('Fetching users failed');
          }
  
          const userData = await response.json();
  
          // Update p_data with user's first name and last name
          const updatedPosts = p_data.map(post => {
            const matchingUser = userData.find(user => user.id === post.user);
            if (matchingUser) {
              return { ...post, user: `${matchingUser.first_name} ${matchingUser.last_name}` };
            }
            return post; // Return the post as is if no matching user is found
          });
  
          setp_data(updatedPosts);
  
        } catch (error) {
          console.error('Error:', error);
          setError('Fetching users failed. Please try again.');
        }
      };
  
      fetchUserData();
    }
  }, [p_data]); // Run when p_data (the post data) changes
  

  return (
    <>
      <Navbar />

      <div className='container' >
        <br />
        <Navtype /><br />

        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Explore topics</h1><br />

        <center>
          <div class="input-group mb-3 " style={{ width: '750px' }}>
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
            <input className='form-control'
              placeholder='Search . . .'
            />
          </div><br />
          <p style={{ fontSize: '16px' }}>Reccommend : Programming Data Science Technology</p>
        </center><br /><br /><br /><br />

      </div><hr />

      <div className='container' >

        <div className='row ' >
          {p_data ? (
            p_data
              .filter(post => post.post_id < 3)
              .map((post, index) => (<>
                <div className='col-sm-6' key={post.post_id}>
                  <div className='card border border-dark shadow-sm h-100'
                    style={{ border: 'none' }}>

                    <img className='
                              img-fluid 
                              card-img-top 
                              cardimgcs1 '
                      src={imgSrc[index]}
                      alt='x'
                      onClick={() => redirect(post.post_id)}
                    />
                    <div className='card-body'>

                      <p className='card-title'
                        style={{ fontSize: '16px'  }}>
                          <i class="bi bi-person-circle"></i> {post.user}</p>

                      <h4 class="card-title"
                        style={{ fontWeight: 'bold', fontSize: '24px' }}>
                        {post.header}
                      </h4>

                      <p className='card-text'
                        style={{ fontSize: '18px', opacity: '60%' }}>
                        {post.short}
                      </p>

                      <p className='card-text'
                        style={{ fontSize: '12px' }}>

                        <img className='m-1 iconsize'
                          src={star}
                          alt='x'
                        />

                        <span className='card-text'
                          style={{ fontWeight: 'bold' }}> {post.post_datetime}</span>

                        <img className='m-1 iconsize'
                          src={Like}
                          alt='x'
                        />

                        <span className='card-text'> 1.5k </span>

                        <img className='m-1 iconsize'
                          src={comment}
                          alt='x'
                        />

                        <span className='card-text'> 15 </span>

                      </p>
                    </div>
                  </div>

                </div>
              </>
              ))
          ) : (
            <p>No posts available {error}</p>
          )}
        </div><br/>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {p_data ? (
            p_data
              .filter(post => post.post_id > 2)
              .map((post, index) => (<>

                <div className='col '>
                  <div className='card border border-dark shadow-sm 
                  h-100' style={{ border: 'none' }}>
                    <img className='img-fluid card-img-top cardimgcs2'
                      src={imgSrc[index]}
                      alt='x'
                    />
                    <div className='card-body'>

                      <p className='card-text'
                        style={{ fontSize: '14px' }}>
                        <i class="bi bi-person-circle"></i> {post.user}
                      </p>

                      <h4
                        style={{
                          fontWeight: 'bold',
                          fontSize: '24px'
                        }}>
                        {post.header}
                      </h4>


                      <p className='card-text'
                        style={{
                          fontSize: '18px',
                          opacity: '60%'
                        }}>
                        {post.short}
                      </p>

                      <p className='card-text'
                        style={{ fontSize: '12px' }}>

                        <img className='m-1 iconsize'
                          src={star}
                          alt='x'
                        />

                        <span className='card-text'
                          style={{ fontWeight: 'bold' }}>
                          {post.post_datetime}
                        </span>

                        <img className='m-1 iconsize'
                          src={Like}
                          alt='x'
                        />

                        <span className='card-text'> 1.5k </span>

                        <img className='m-1 iconsize'
                          src={comment}
                          alt='x' />

                        <span className='card-text'> 15 </span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
              ))
          ) : (
            <p>No posts available</p>
          )}
        </div>


        {/* <Mostview/> */}
      </div>

      <hr />
      <Footer />
    </>
  )
}
