import React from "react";
import { useState } from "react";
import "../App.css";
import "../font.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // เปลี่ยนเป็น true เมื่อผู้ใช้ล็อกอิน

  return (
    <>
      <nav
        class="navbar border"
        style={{ background: "none", fontWeight: "bold" }}
      >
        <div className="container-fluid">
          <span
            class="crimson-text-bold-italic hover-text-yellow"
            style={{ fontSize: "30px", fontWeight: "", cursor: "pointer" }}
            onClick={() => (window.location.href = "/")}
          >
            OLAF.
          </span>
          <div className="d-flex justify-content-start w-75">
            <button
              className="btn m-1 hover-text-yellow"
              style={{ fontSize: "16px", fontWeight: "" }}
              onClick={() => (window.location.href = "/")}
            >
              {/* <a
                href="/"
                style={{ color: "Green", textDecoration: "none" }}
              > */}
              Home
              {/* </a> */}
            </button>
            {isLoggedIn && (
            <button
              className="btn m-1 hover-text-yellow"
              style={{ fontSize: "16px", fontWeight: "" }}
              onClick={() => {setIsLoggedIn(false);
                window.location.href = "/profile"
              }}
            >
              Profile
            </button>
            )}
            <button
              className="btn m-1 hover-text-yellow"
              style={{ fontSize: "16px", fontWeight: "" }}
              onClick={() => (window.location.href = "/about")}
            >
              About
            </button>
          </div>
          <div className="d-flex">
          {!isLoggedIn && (
              <>
          <button className='btn btn-success m-1' 
                        style={{fontSize:'16px'}}
                        onClick={() => (window.location.href = "/register")}
                        >
            {/* <button
              className="btn m-1 hover-text-yellow"
              style={{ fontSize: "16px", fontWeight: "700" }}
              onClick={() => (window.location.href = "/register")}
            > */}
              SIGN UP
            </button>
            <button className='btn btn-outline-dark m-1' 
                        style={{fontSize:'16px'}}
                        onClick={() => (window.location.href = "/login")}
            >
            {/* <button
              className="btn m-1 hover-text-yellow"
              style={{ fontSize: "16px", fontWeight: "700" }}
              onClick={() => (window.location.href = "/login")}
            > */}
              SIGN IN
            </button>
            </>
            )}

            {/* แสดงปุ่ม LOG OUT เฉพาะเมื่อผู้ใช้ล็อกอิน */}
            {isLoggedIn && (
              <button
                className="btn btn-outline-dark m-1"
                style={{ fontSize: "16px" }}
                onClick={() => {
                  // ล้างสถานะการล็อกอินเมื่อผู้ใช้คลิก LOG OUT
                  setIsLoggedIn(false);
                  // ทำสิ่งที่จำเป็นสำหรับการล็อกเอาท์ เช่น redirect
                  window.location.href = "/";
                }}
              >
                LOG OUT
              </button>
            )}

          </div>
        </div>
      </nav>
    </>
  );
}
