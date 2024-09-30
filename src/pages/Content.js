import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Content = () => {
  const location = useLocation(); // รับข้อมูลจาก state ที่ถูกส่งมา
  const { card } = location.state || {}; // รับข้อมูล card จาก state

  if (!card) {
    return <p>Post not found.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "50px", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src={card.imgSrc}
            alt={card.title}
            style={{ width: "50%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ marginTop: "48px" }}>
        <h2>{card.title}</h2>
        <h4>{card.author}</h4>
        <p>{card.description}</p>
        <p>
          <strong>Date:</strong> {card.date}
        </p>
        <p>
          <strong>Views:</strong> {card.views}
        </p>
        <p>
          <strong>Comments:</strong> {card.comments}
        </p>
      </div>

      </div>

    <div style={{ textAlign: "center" }}>
      <Footer />
    </div>
    </>
  );
};

export default Content;
