import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css"

function Header() {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <div className="logo">
          <h1>Cincinnati Travels</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/attractions">Attractions</Link>
          </li>
          <li>
            <Link to="/Map">Map</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="Move-To-Footer-Container">
          <a id="Move-To-Footer" href="#footer"> Go To Bottom </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
