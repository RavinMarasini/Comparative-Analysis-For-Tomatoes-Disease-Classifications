import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="widthWrapper">
        <div className="navbar">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
            <Link to="/">
              <h1 style={{ color: "black" }}>TomatoHavestInsight</h1>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
