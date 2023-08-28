import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: ""
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  //console.log(token);

  function addUser(e) {
    e.preventDefault();
    // redirect page --code

    if (user.password !== user.cpassword) {
      setError("password and conform password should be the same!");
      setSuccess("");
    }
    console.log(token);
    localStorage.setItem("token", JSON.stringify(token));
    let url = "https://instagram-express-app.vercel.app/api/auth/signup";
    axios
      .post(url, {
        name: user.username,
        email: user.email,
        password: user.password
      })
      .then((responce) => {
        setSuccess(responce.data.message);
        setToken(responce.data.data.token);
        setError("");
        // Redirect to the main page after successful signup
        navigate("/Mainpage"); // Use navigate to perform redirection
      })

      .catch((error) => {
        setError(error.response.data.message);
        setSuccess("");
      });
  }

  return (
    <div className="container">
      <h1>Authentication page</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUser({ ...user, username: event.target.value });
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setUser({ ...user, email: event.target.value });
          }}
        />
        <input
          type="passwo
            rd"
          placeholder="Password"
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        />
        <input
          type="password"
          placeholder="conform Password"
          onChange={(event) => {
            setUser({ ...user, cpassword: event.target.value });
          }}
        />
        <button type="submit" className="btn">
          SignIn
        </button>
      </form>
      {success ? (
        <p className="success">{success}</p>
      ) : (
        <p className="error">{error}</p>
      )}
    </div>
  );
};
export default Auth;
