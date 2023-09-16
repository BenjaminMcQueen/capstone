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
        <div className="Move-To-Footer-Container">
          <a id="Move-To-Footer" href="#footer"> Go To Bottom </a>
        </div> 
        <ul className="nav-links">
          <li>
          <button className="nav-btn">
            <Link to="/">Home</Link></button>
          </li>
          <li>
          <button className="nav-btn">
            <Link to="/AboutUs">About Us</Link></button>
          </li>
          <li>
          <button className="nav-btn">
            <Link to="/attractions">Attractions</Link></button>
          </li>
          <li>
          <button className="nav-btn">
            <Link to="/Map">Map</Link></button>
          </li>
          <li>
          <button className="nav-btn">
            <Link to="/contact">Contact</Link></button>
          </li>
        </ul>
       
      </nav>
    </header>
  );
}

export default Header;
