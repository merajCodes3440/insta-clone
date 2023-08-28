import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/Auth">SignIn</Link>
      <Link to="/Login">LogIn</Link>
      <Link to="/Mainpage">MainPage</Link>
    </div>
  );
};
export default Navbar;

//  {/* <a href="/">Home</a>
//       <a href="/Auth">Signin</a>
//       <a href="/Login">Login</a>
// <a href="/Mainpage">MainPage</a>*/}
