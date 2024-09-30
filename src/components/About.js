import React from "react";
import "../App.css"; // Assuming you have some global styles here
import "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function About() {
  return (
    <>
    <Navbar />
    <div className="container" style={{ marginTop: "50px", padding: "20px" }}>
      {/* Title Section */}
      <h1 className="text-center" style={{ fontWeight: "bold", fontSize: "40px", color: "#333" }}>
        About OLAF
      </h1>
      <p className="text-center" style={{ color: "#555", fontSize: "18px", marginBottom: "40px" }}>
        Shaping ideas, stories, and knowledge through your own creativity.
      </p>

      {/* Our Mission Section */}
      <section className="mb-5">
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#28a745" }}>Our Mission</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
          At OLAF, we believe that ideas, stories, and knowledge are powerful tools that can
          transform the world. Our mission is to provide a platform where people can share their
          unique perspectives, foster creativity, and contribute to the global community of thinkers.
          Whether it's through writing, storytelling, or artistic expression, OLAF empowers individuals
          to bring their creations to life.
        </p>
      </section>

      {/* Our Vision Section */}
      {/* <section className="mb-5">
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#28a745" }}>Our Vision</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
          We envision a future where every voice is heard, where individuals from all walks of life
          can share their unique experiences and perspectives. OLAF aims to be the go-to platform for
          creators, thinkers, and dreamers to build connections, inspire others, and leave a lasting impact.
        </p>
      </section>

      The Team Section
      <section className="mb-5">
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#28a745" }}>Meet Our Team</h2>
        <div className="row"> */}
          {/* Team Member 1 */}
          {/* <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px" }}
            />
            <h5 style={{ fontWeight: "bold", color: "#333" }}>Jane Doe</h5>
            <p style={{ color: "#777", fontSize: "14px" }}>Founder & CEO</p>
          </div> */}
          {/* Team Member 2 */}
          {/* <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px" }}
            />
            <h5 style={{ fontWeight: "bold", color: "#333" }}>John Smith</h5>
            <p style={{ color: "#777", fontSize: "14px" }}>Chief Technology Officer</p>
          </div> */}
          {/* Team Member 3 */}
          {/* <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px" }}
            />
            <h5 style={{ fontWeight: "bold", color: "#333" }}>Emily Brown</h5>
            <p style={{ color: "#777", fontSize: "14px" }}>Creative Director</p>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#28a745" }}>Get in Touch</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
          We'd love to hear from you! Whether you have a question, feedback, or just want to chat,
          feel free to reach out to us.
        </p>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Email us at: <a href="mailto:support@olaf.com" style={{ color: "#28a745" }}>support@olaf.com</a>
        </p>
      </section>
    </div>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <Footer />
    </div>
    </>
  );
}
