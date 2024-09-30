import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Mininav from "../components/Mininav";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Navtype from "../components/Navtype";
import Homebg from "../asset/Homebg.png";
import Content from "../pages/Content";
import { useNavigate } from "react-router-dom";

export default function Home() {
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
    // สามารถเพิ่มข้อมูล card เพิ่มเติมใน array นี้
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
      <Navbar />
      <div className="text-center" style={{ position: "relative" }}>
        <img
          src={Homebg} // Use the imported image here
          alt="Banner"
          style={{
            width: "100%", // Make the image full width
            height: "500px", // Set a fixed height (adjustable)
            objectFit: "cover", // Ensures the image covers the area without stretching
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%", // Position text vertically in the middle of the image
            left: "30%", // Position text horizontally in the middle
            transform: "translate(-50%, -50%)", // Center the text properly
            color: "white", // White text color for better contrast
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "48px", // Font size to fit the reduced banner height
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add shadow to make text more readable
            }}
          >
            Welcome to Our Blog
          </h1>
          <p
            style={{
              fontSize: "20px",
              opacity: "0.9",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
            }}
          >
            Explore the latest articles on technology, culture, and more!
          </p>
        </div>
      </div>

      <hr className="m-0" />
      <div className="container">
        <br />
        <div className="row">
          <div className="col-8">
            <Mininav />
            {cardData.map((card, index) => (
              <div className="col border-bottom m-3" key={index}>
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
                  <div className="card-body">
                    <div className="row">
                      <div className="col-8">
                        <p style={{ fontSize: "14px" }}>{card.author}</p>
                        <h4 style={{ fontWeight: "bold", fontSize: "24px" }}>
                          {card.title}
                        </h4>
                        <p style={{ fontSize: "18px", opacity: "60%" }}>
                          {card.description}
                        </p>
                        <p className="m-1" style={{ fontSize: "12px" }}>
                          <img
                            className="m-1"
                            src="https://cdn4.iconfinder.com/data/icons/essentials-72/24/029_-_Star-512.png"
                            alt="x"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <span className="m-1" style={{ fontWeight: "bold" }}>
                            {card.date}
                          </span>
                          <img
                            className="m-1"
                            src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-256.png"
                            alt="x"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <span className="m-1">{card.views}</span>
                          <img
                            className="m-1"
                            src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/comment-512.png"
                            alt="x"
                            style={{ width: "18px", height: "18px" }}
                          />
                          <span className="m-1">{card.comments}</span>
                        </p>
                      </div>
                      <div className="col-3">
                        <img
                          src={card.imgSrc}
                          alt="x"
                          style={{
                            width: "240px",
                            height: "150px",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Staff Picks Column */}
          <div className="col-4 border-start">
            <div
              className="card"
              style={{ border: "none", backgroundColor: "#e0f7fa" }}
            >
              <div className="card-body">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#00796b",
                  }}
                >
                  Staff Picks
                </p>
                <p style={{ fontSize: "16px", color: "#555" }}>
                  Andrew Jazprose Hill in Counter Arts
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Keeping Up With The Joneses Rochelle Deans The Rise and Fall
                  of NaNoWriMo
                </p>
                <p style={{ fontSize: "16px", color: "#555" }}>
                  The Medium Newsletter in The Medium Blog
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  The 10-minute rule, and more tips to kick off your week See
                  the full list
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ paddingLeft: "48px", marginTop: "10px" }}
      >
        <Footer />
      </div>
    </>
  );
}
