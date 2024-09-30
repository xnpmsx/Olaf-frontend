import React from "react";
import "../App.css";

export default function Footer() {
  return (
    // <div className="footer-container">
    //   <div className="container">
    //     <ul className="nav nav-pills justify-content-center" style={{ fontSize: '16px' }}>
    //       <li className="nav-item">
    //         <a className="nav-link hover-text-yellow" href="/feed">For you</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link hover-text-yellow" href="#">Following</a>
    //       </li>
    //     </ul>
    //   </div>
    <div
      className="social-icons"
      style={{ marginTop: "10px", marginBottom: "32px" }}
    >
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Facebook"
          style={{ width: "30px", height: "30px", margin: "0 10px" }}
        />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
          alt="Instagram"
          style={{ width: "30px", height: "30px", margin: "0 10px" }}
        />
      </a>
      <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 509.64"
          width="30"
          height="30"
          style={{ margin: "0 10px" }}
          // viewBox="0 0 24 24"
        >
          <rect width="512" height="509.64" rx="115.61" ry="115.61" />
          <path
            fill="#fff"
            fill-rule="nonzero"
            d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
          />
          {/* <path fill="none" d="M0 0h24v24H0z"/>
          <path fill="#000" d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0zm5.929 9.212c.006.144.006.287.006.431 0 4.409-3.354 9.485-9.485 9.485-1.886 0-3.633-.551-5.094-1.486.263.032.528.048.803.048 1.569 0 3.018-.535 4.174-1.432-1.465-.027-2.707-1.001-3.136-2.34.206.038.415.057.628.057.308 0 .608-.042.895-.119-1.537-.308-2.688-1.663-2.688-3.284v-.042c.45.25.963.402 1.511.419-1.412-.943-1.754-2.847-1.754-4.302 0-.949.255-1.839.697-2.597 2.526 3.097 6.313 5.141 10.582 5.354-.087-.379-.135-.778-.135-1.185 0-2.861 2.33-5.196 5.196-5.196 1.494 0 2.835.631 3.785 1.646 1.178-.232 2.285-.658 3.293-1.243-.389 1.21-1.209 2.226-2.281 2.892 1.035-.124 2.024-.399 2.934-.809-.684 1.025-1.547 1.91-2.52 2.62z"/> */}
        </svg>
      </a>
      {/* </div>
      <br /> */}
    </div>
  );
}
