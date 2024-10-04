import React, { useState, useEffect } from 'react';
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function PostLikeButton({ post_id, loggedInUser }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // ฟังก์ชันสำหรับดึงสถานะการไลก์และจำนวนไลก์
  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/posts/${post_id}/likes/`, {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`, // ใช้ token authentication ถ้ามี
          },
        });

        if (response.ok) {
          const data = await response.json();
          setLiked(data.user_has_liked); // ตรวจสอบว่าผู้ใช้คนนี้ได้ไลก์โพสต์หรือยัง
          setLikeCount(data.like_count); // จำนวนไลก์ทั้งหมดของโพสต์
        } else {
          console.error('Failed to fetch like status');
        }
      } catch (error) {
        console.error('Error fetching like status:', error);
      }
    };

    fetchLikeStatus();
  }, [post_id]); // ดึงข้อมูลทุกครั้งเมื่อ `post_id` เปลี่ยนแปลง

  // ฟังก์ชันสำหรับจัดการการกดไลก์/ยกเลิกไลก์
  const handleLike = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/posts/${post_id}/like/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${localStorage.getItem('token')}`, // ใช้ token authentication ถ้ามี
        },
        body: JSON.stringify({
          user: loggedInUser, // ส่ง user ที่ล็อกอินไป
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setLiked(data.liked); // อัปเดตสถานะการไลก์
        setLikeCount(data.like_count); // อัปเดตจำนวนไลก์
      } else {
        console.error('Failed to update like status');
      }
    } catch (error) {
      console.error('Error updating like status:', error);
    }
  };

  return (
    <div>
      <button
        onClick={handleLike}
        style={{
          backgroundColor: liked ? 'red' : 'gray', // สีปุ่มเปลี่ยนตามสถานะไลก์
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {liked ? 'Unlike' : 'Like'}
      </button>
      <p>{likeCount} Likes</p>
    </div>
  );
}
