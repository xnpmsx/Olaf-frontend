import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Navtype from '../components/Navtype'
import Mostview from '../FilterPost/Mostview'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Feed() {
  const [p_data, setp_data] = useState();
  const [error, setError] = useState(null); // เพิ่ม state สำหรับ error handling
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/posts/', {
          method: 'GET',
        });
  
        if (!response.ok) {
          throw new Error('Fetching posts failed');
        }
  
        const data = await response.json();
        
        // Map the data to include only specific fields
        const filteredData = data.map(post => ({
          post_id: post.post_id,
          user:post.user,
          header:post.header,
          short:post.short,
          post_datetime: post.post_datetime,
          
        }));
  
        // Limit to the latest 10 posts
        const latestPosts = filteredData.length > 10 ? filteredData.slice(-10) : filteredData;
        
        setp_data(latestPosts);
        console.log(latestPosts); // Log the data to see the latest posts
      } catch (error) {
        console.error('Error:', error);
        setError('Fetching posts failed. Please try again.');
      }
    };
  
    fetchData();
  }, []);

  const handleCardClick = (post) => {
    navigate(`/content/${post.post_id}`, { state: { post } }); // ใช้ useNavigate และส่งข้อมูลผ่าน state
  };
  
  return (
    <>
   
      <Navbar/>

      <div className='container'>
        <br/>
        <Navtype/><br/>

        <h1 style={{textAlign:'center',fontWeight:'bold'}}>Explore topics</h1><br/>

        <center>
          <input className='form-control' style={{width:'750px'}} 
            placeholder='Search . . .'
          /><br/>
          <p style={{fontSize:'16px'}}>Reccommend : Programming Data Science Technology</p>
        </center><br/><br/><br/><br/>

      </div>
      
      <hr/>

     
      <div className='container'><br/>
        {/* <h3 style={{textAlign:'center'}}></h3> */}
          {p_data ? (
              p_data.map((post, index) => (
                <div className='container'
                key={post.post_id}
                style={{ cursor: 'pointer' }}
                onClick={() => handleCardClick(post)}
                >
                  <h3>Post #{post.post_id}</h3>
                    {/* header */}
                      {/* ส่วนหัว */}
                    <p>{post.header}</p>
                    {/* short */}
                      {/* ส่วนย่อ */} 
                    <p>{post.short}</p>
                  <p><small>{new Date(post.post_datetime).toLocaleString()}</small></p>
                  {/* <img src={post.image} alt={`Post ${post.post_id}`} style={{ maxWidth: '100%' }} /> */}
                </div>
              ))
            ) : (
              <p>No posts available</p>
            )}

        <Mostview/>

      
      </div>
      
      <hr/>
      <div style={{ textAlign: "center" }}>
      <Footer />
    </div>
    </>
  )
}
