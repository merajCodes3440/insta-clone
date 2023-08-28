import "./styles.css";
import Auth from "./components/Auth";
import Login from "./components/Login";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Error from "./components/Error";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
export default App;
