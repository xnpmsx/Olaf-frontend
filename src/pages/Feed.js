import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Nav/Navbar'
import Navtype from '../components/Nav/Navtype'
import Footer from '../components/Footer';
import { Iconpath } from '../components/Iconpath';
// import { Navigate } from 'react-router-dom';
import  { useRedirect }  from '../hook/redirect/useRedirect';
import ShareButtons from '../hook/shares/ShareButtons';
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Feed() {
  const redirectx = useRedirect();
  const [p_data, setp_data] = useState([]);
  const [imgSrc, setImgSrcs] = useState([]);
  const [error, setError] = useState(null); 
  const Ic = Iconpath()
  const star = Ic[0]
  const Like = Ic[1]
  const comment = Ic[2]

  // const redirect = (s) =>{
  //   window.location.href =`/vFeed/${s}`
  // }
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch posts
        const [postResponse, userResponse] = await Promise.all([
          fetch(`${baseUrl}/posts/`, { method: 'GET' ,withCredentials: true,credentials: 'include'}),
          fetch(`${baseUrl}/users/`, { method: 'GET' ,withCredentials: true,credentials: 'include'}),
        ]);
  
        // Handle posts response
        if (!postResponse.ok) throw new Error('Fetching posts failed');
        const postData = await postResponse.json();
  
        // Handle users response
        if (!userResponse.ok) throw new Error('Fetching users failed');
        const userData = await userResponse.json();
  
        // Update posts with user data (first name and last name)
        const updatedPosts = postData.map(post => {
          const matchingUser = userData.find(user => user.id === post.user);
          if (matchingUser) {
            return { ...post, user: `${matchingUser.first_name} ${matchingUser.last_name}` };
          }
          return post;
        });
  
        // Calculate time passed since post creation
        const calculateTimePassed = postDate => {
          const postDateTime = new Date(postDate);
          const now = new Date();
  
          const timeDiff = now - postDateTime;
          const diffHours = Math.floor(timeDiff / (1000 * 60 * 60)); // Hours
          const diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
  
          if (diffHours < 24) {
            if (diffHours === 0) return `${diffMinutes} minutes ago`;
            return `${diffHours} hours and ${diffMinutes} minutes ago`;
          } else {
            const diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Days
            if (diffDays < 30) return `${diffDays} days ago`;
            else if (diffDays < 365) {
              const diffMonths = Math.floor(diffDays / 30);
              return `${diffMonths} months ago`;
            } else {
              const diffYears = Math.floor(diffDays / 365);
              return `${diffYears} years ago`;
            }
          }
        };
  
        // Map post data to include necessary fields and time passed
        const processedPosts = updatedPosts.map(post => ({
          post_id: post.post_id,
          user: post.user,
          header: post.header,
          short: post.short,
          image: post.image , // Default image if none
          post_datetime: calculateTimePassed(post.post_datetime),
        }));
  
        // Limit to latest 10 posts
        const latestPosts = processedPosts.slice(-10);
  
        setp_data(latestPosts); // Set post data
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
  }, []);
  
  return (
    <>
      
        <>
          {/* <Navbar /> */}
          <div className='container' >
            <br />
            <Navtype /><br />

            <h1 style={{ textAlign: 'center', 
              fontWeight: 'bold' }}>
                Explore topics
              </h1><br />

            <div className='container'>
              <center>
                <div class="input-group mb-3 " style={{ width: '75%' }}>
                  <span class="input-group-text" 
                  id="basic-addon1"><i class="bi bi-search"></i></span>
                  <input className='form-control'
                    placeholder='Search . . .'
                  />
                </div><br />
                <p style={{ fontSize: '16px' }}>
                  Reccommend : Programming Data Science Technology
                </p>
              </center>
            </div><br /><br /><br /><br />

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
                          onClick={() => redirectx(String(post.post_id))}
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

                            <ShareButtons url={`http://192.168.1.57:3000/vFeed/${post.post_id}`} title={`${post.header}`}/>

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
      
    </>
  )
}
