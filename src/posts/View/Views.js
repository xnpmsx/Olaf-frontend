import React, { useEffect, useState } from 'react'
import { Iconpath } from '../../components/Iconpath';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Nav/Navbar';
import './view.css'
import Navtype from '../../components/Nav/Navtype';

export default function View() {
  const { id } = useParams(); // รับ id จาก URL path
  const [p_data, setp_data] = useState([]);
  const [error, setError] = useState(null);
  const Ic = Iconpath();


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}/`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Fetching post failed');
        }

        const data = await response.json();
        setp_data(data); // เก็บข้อมูลที่ดึงมาใน state

      } catch (error) {
        console.error('Error:', error);
        setError('Fetching post failed. Please try again.');
      }
    };

    fetchUserData(); // ดึงข้อมูลเมื่อ component mount หรือ id เปลี่ยน
  }, [id]); // id จะเปลี่ยนเมื่อ URL path เปลี่ยน

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>

      <Navbar /><br />
      <Navtype />
      <div className={window.innerWidth <= 425 ? 'container-fluid' :
        'container border border-dark shadow-sm rounded glasx'}>
        <div className={window.innerWidth <= 425 ? 'd-flex justify-content-center' : ''}>
          <div className={window.innerWidth <= 426 ? '' : 'swx container'} >
            <br />

            <h1 class=""
              style={{ fontWeight: 'bolder', fontSize: '42.5px' }}>
              {p_data.header}
            </h1>

            <p className=''
              style={{ fontSize: '25px', opacity: '60%' }}>
              {p_data.short}
            </p>

            <p className='border-top border-bottom border-dark  p-2'
              style={{ fontSize: '16px' }}>
              <i class="bi bi-person-circle"></i>
              &nbsp;{p_data.user}
            </p>

            <p className=''
              style={{ fontSize: '12px' }}>

              <img className='m-1 iconsize'
                src={Ic[0]}
                alt='x'
              />

              <span className=''
                style={{ fontWeight: 'bold' }}>
                {p_data.post_datetime}
              </span>

              <img className='m-1 iconsize'
                src={Ic[1]}
                alt='x'
              />

              <span className=''> 1.5k </span>

              <img className='m-1 iconsize'
                src={Ic[2]}
                alt='x'
              />

              <span className=''> 15 </span>

            </p>
          </div>
        </div>

        <div className='d-flex justify-content-center'>
          <img className=''
            src={p_data.image || 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1Eq0WTubrn1gd_NofdVtJg.png'}
            alt='x'
            style={{ width: '70%' }}
          />
        </div><br />

        <div className='d-flex justify-content-center'>
          <div className='swx' >
            <p className='crimson-text-regular' style={{ fontSize: '24px' }}>
              {p_data.post_text}
            </p>
          </div>
        </div>

      </div>

      <br />

      <div style={{backgroundColor:'whitesmoke'}}>
        <div className={window.innerWidth <= 425 ?
          'container-fluid' :
          'container-fluid   glasx'}>

          <div className={window.innerWidth <= 425 ?
            'd-flex justify-content-center' : ''}>

            <div className={window.innerWidth <= 426 ?
              '' : 'swx container'} >
              <br />
              <p className='p-2'
                style={{ fontSize: '16px' }}>
                <i class="bi bi-person-circle"></i>
                &nbsp;Written by {p_data.user}
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
