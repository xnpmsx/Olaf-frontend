import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  // State to store form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the payload
    const payload = {
      username: username, // Adjust according to your API (username or email)
      password: password,
    };

    try {
      // Send POST request to login API endpoint
      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Parse the JSON response
      const data = await response.json();

      localStorage.setItem("token", data.token);
      const token = localStorage.getItem("token");
      decodeToken(token);

      // Optionally redirect or do something after successful login
      console.log("Login successful");
      window.location.href = "/Feed";
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="border-end" style={{ marginTop: "220px" }}>
              <span
                class="crimson-text-bold-italic"
                style={{
                  fontSize: "200px",
                  marginLeft: "125px",
                  cursor: "pointer",
                }}
                onClick={() => (window.location.href = "/")}
              >
                OLAF.
              </span>
              <p
                className="crimson-text-regular-italic"
                style={{ marginLeft: "125px" }}
              >
                Ideas, stories, and knowledge are all creations that can be
                shaped by your own hands.
              </p>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ marginTop: "180px", border: "none", width: "525px" }}
            >
              <div className="card-body">
                <h3
                  className="crimson-text-bold-italic"
                  style={{ fontSize: "80px" }}
                >
                  Sign in
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputUsername1"
                      className="form-label"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUsername1"
                      aria-describedby="userNameHelp"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} // Update state on change
                    />
                    {/* <div id="emailHelp" 
                        className="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update state on change
                    />
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}{" "}
                  {/* Show error message */}
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "15px",
                      fontSize: "13px",
                    }}
                  >
                    <p style={{ margin: "0", color: "gray" }}>
                      Don't have an account? <a href="/Register">Sign up</a>
                    </p>
                    <p style={{ margin: "0", color: "gray" }}>
                      Forgot your password?{" "}
                      <a href="/ResetPassword">Reset password</a>
                    </p>
                  </div>
                </form>
                <br />

                <div className="row">
                  <div
                    className="card p-1 m-1"
                    style={{
                      width: "60px",
                      height: "60px",
                      padding: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                        alt="Icon"
                        style={{ width: "45px", height: "45px", margin: "0 10px" }}
                      />
                    </div>
                  </div>

                  {/* <div className="row">
  <div
    className="card p-1 m-1"
    style={{
      width: "60px",
      height: "60px",
      padding: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f8f9fa", // สีพื้นหลัง
      borderRadius: "10px", // มุมโค้ง
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // เงา
      transition: "transform 0.2s", // การเปลี่ยนแปลงเมื่อโฮเวอร์
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // ขยายเมื่อโฮเวอร์
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // คืนสู่ขนาดเดิมเมื่อไม่โฮเวอร์
  >
    <div
      className="card-body"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        alt="Icon"
        style={{ width: "40px", height: "40px" }} // ปรับขนาดให้เหมาะสม
      />
    </div>
  </div> */}

                  <div
                    className="card p-1 m-1"
                    style={{
                      width: "60px",
                      height: "60px",
                      padding: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/600px-2023_Facebook_icon.svg.png"
                        alt="Icon"
                        style={{ width: "45px", height: "45px", margin: "0 10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
