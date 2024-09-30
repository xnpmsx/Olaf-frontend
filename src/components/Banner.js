import React from "react";
import '../App.css';

export default function Banner() {
    return (
    <>
        <div className="container-fluid text-center" style={{ justifyContent: "center" , marginTop: "30px", backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",}}>
            <button
              className="btn btn-outline-dark m-1"
              style={{ fontSize: "16px" }}
            >
              <a
                href="/register"
                style={{ color: "Green", textDecoration: "none" }}
              >
                Home
              </a>
            </button>
            <button
              className="btn btn-outline-dark m-1"
              style={{ fontSize: "16px" }}
            >
              <a
                href="/login"
                style={{ color: "Green", textDecoration: "none" }}
              >
                Profile
              </a>
            </button>
          </div>
    </>
  );
}
