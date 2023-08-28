import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [zuku, setZuku] = useState("");

  console.log(token);

  useEffect(() => {
    if (token !== "") {
      axios
        .get("https://instagram-express-app.vercel.app/api/auth/zuku", {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((res) => setZuku(res.data.data.message))
        .catch((error) => console.log(error));
    }
  }, [token]);

  // function  for logout the page----
  function logout(e) {
    e.preventDefault();
    axios
      .delete("https://instagram-express-app.vercel.app/api/auth/logout", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        setSuccess(res.data.message);
        setError("");
      })
      .catch((error) => {
        setError(
          error.response?.data?.message || "An error occurred during logout."
        );
        setSuccess(""); // Clear any previous success messages on error
      });
  }

  function submitForm(event) {
    event.preventDefault();
    // let data = JSON.parse(localStorage.getItem("token"));
    // console.log(data);
    axios
      .post("https://instagram-express-app.vercel.app/api/auth/login", {
        email: user.email,
        password: user.password
      })
      .then((response) => {
        // setTimeout(() => {
        //   setSuccess("");
        // }, 2000);
        setSuccess(response.data.message);
        setToken(response.data.data.token);
        //  console.log(response.data.message); // token debug
        // navigate--------
        navigate("/Mainpage");
        setError("");
      })
      .catch((error) => {
        // setTimeout(() => {
        //   setError("");
        // }, 2000);
        setError(error.response.data.message);
        //   console.log(error.response.data.message);  // debug error
        setSuccess("");
      });
  }

  return (
    <div className="container">
      <h1>Login page</h1>
      <form onSubmit={submitForm}>
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        <button>Login</button>
      </form>
      {/* <button className="logout" onClick={logout}>
          Logout
        </button> */}
      {success ? (
        <p className="success">{success}</p>
      ) : (
        <p className="error">{error}</p>
      )}
      {/* <button onClick={zukuMessage}>ZUKUMESSAGE</button> */}
      <div className="zuku">{zuku}</div>
    </div>
  );
};
export default Login;
