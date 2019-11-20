import React from "react";
import logo from "../img/nasa_logo.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Nasa Logo" />
      </div>
      <div className="nav">
        <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          About
        </a>
        <a className="nav-item" href="#">
          Media
        </a>
        <a className="nav-item" href="#">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
