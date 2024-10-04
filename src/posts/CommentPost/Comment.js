import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Comment({ post_id }) {
  const [comments, setComments] = useState([]); // ตั้งค่าเริ่มต้นเป็น []

  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState(''); // state สำหรับจัดเก็บคอมเมนต์ใหม่
  const [error, setError] = useState(null); // สำหรับเก็บ error ถ้ามี

  const { user } = useAuth()

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${baseUrl}/comments/${post_id}/`, {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include'
        });

        if (response.ok) {
          const data = await response.json();
          // console.log('Data fetched:', data); // ตรวจสอบข้อมูลที่ได้จาก API
          setComments(Array(data)); // ตั้งค่าเฉพาะถ้า data เป็น array
        } else {
          console.error('Failed to fetch comments');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [post_id]); // ทำการดึงข้อมูลเมื่อ post_id เปลี่ยนแปลง

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post_id);

    try {
      const response = await fetch(`${baseUrl}/comments/${post_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          post: post_id,
          user: user.id,  // ใช้ user id ของผู้ใช้ปัจจุบัน
          comment_datetime: new Date().toISOString(),  // กำหนดเวลาปัจจุบัน
          comment_text: newComment,  // คอมเมนต์ที่ผู้ใช้กรอก
          like_count: 0  // จำนวน like เริ่มต้นเป็น 0
        })
      });

      if (response.ok) {
        const data = await response.json();
        setComments([...comments, data]); // เพิ่มคอมเมนต์ใหม่เข้าไปในรายการคอมเมนต์
        setNewComment(''); // ล้างฟอร์มหลังจากเพิ่มคอมเมนต์สำเร็จ
      } else {
        console.error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to add comment');
    }
  };

  if (loading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div>
    <h3>Comments</h3>

    {/* ส่วนแสดงคอมเมนต์ */}
    <ul>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <li key={comment.comment_id}>
            <p>{comment.comment_text}</p>
            <p><small>{comment.comment_datetime}</small></p>
          </li>
        ))
      ) : (
        <li>No comments available</li>
      )}
    </ul>

    {/* แบบฟอร์มสำหรับเพิ่มคอมเมนต์ใหม่ */}
    <form onSubmit={handleSubmit}>
      <textarea className='form-control'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        required
      /><br/>
      <button className='btn btn-dark' type="submit">Add Comment</button>
    </form><br/>

    {/* แสดงข้อความ error ถ้ามี */}
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  );
}
