import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// recommend
export default function Mostview() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const cardData = [
    {
      author: "Nattapat Phungphugdee",
      title: "5 amazing new JavaScript features in ES15 (2024)",
      description: "5 amazing new JavaScript features in ES15 (2024)",
      date: "Jan 3",
      views: "1.5k",
      comments: 15,
      imgSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IPn6YG_9vnMs3vktlz1x5A.png",
    },
    {
      author: "Nattapat Phungphugdee",
      title: "Understanding Async & Await in JavaScript",
      description: "A deep dive into async/await and how to use it effectively.",
      date: "Feb 10",
      views: "2.1k",
      comments: 25,
      imgSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IPn6YG_9vnMs3vktlz1x5A.png",
    },
    {
      author: "Nattapat Phungphugdee",
      title: "5 amazing new JavaScript features in ES15 (2024)",
      description: "5 amazing new JavaScript features in ES15 (2024)",
      date: "Jan 3",
      views: "1.5k",
      comments: 15,
      imgSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IPn6YG_9vnMs3vktlz1x5A.png",
    },
  ];

  const handleCardClick = (card) => {
    navigate(`/content/${card.title}`, { state: { card } });
  };  

  return (
    <>
      <div className='container'>
        <div className='row'>
          {cardData.map((card, index) => (
            <div className='col' key={index}>
              <div
                  className="card"
                  style={{
                    marginBottom: "10px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor:
                      hoveredCard === index ? "#c3e6cb" : "#e9ecef",
                    transition: "background-color 0.3s",
                    boxShadow:
                      hoveredCard === index
                        ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                        : "none",
                    transform:
                      hoveredCard === index ? "scale(1.02)" : "scale(1)",
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(card)}
                >
                <img className='card-img-top' src={card.imgSrc} alt='x' />
                <div className='card-body'>
                  <p style={{ fontSize: '14px' }}>{card.author}</p>
                  <h4 style={{ fontWeight: 'bold', fontSize: '24px' }}>{card.title}</h4>
                  <p style={{ fontSize: '18px', opacity: '60%' }}>{card.description}</p>
                  <p className='m-1' style={{ fontSize: '12px' }}>
                    <img 
                      className='m-1' 
                      src='https://cdn4.iconfinder.com/data/icons/essentials-72/24/029_-_Star-512.png' 
                      alt='x' 
                      style={{ width: '18px', height: '18px' }} 
                    />
                    <span className='m-1' style={{ fontWeight: 'bold' }}>{card.date}</span>
                    <img 
                      className='m-1' 
                      src='https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-256.png' 
                      alt='x' 
                      style={{ width: '18px', height: '18px' }} 
                    />
                    <span className='m-1'>{card.views}</span>
                    <img 
                      className='m-1' 
                      src='https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/comment-512.png' 
                      alt='x' 
                      style={{ width: '18px', height: '18px' }} 
                    />
                    <span className='m-1'>{card.comments}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
