import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

function Header() {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <div className="logo">
          <h1 className="word">cin<span className="backward-letter"> c </span>innati Trav<span className="backward-letter"> e </span>ls</h1>
        </div>
        <div className="Move-To-Footer-Container">
          <a id="Move-To-Footer" href="#footer"><button className="nav-btn">Go To Bottom</button></a>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/"><button className="nav-btn">Home</button></Link>
          </li>
          <li>
            <Link to="/AboutUs"><button className="nav-btn">About Us</button></Link>
          </li>
          <li>
            <Link to="/attractions"><button className="nav-btn">Attractions</button></Link>
          </li>
          <li>
            <Link to="/Map"><button className="nav-btn">Map</button></Link>
          </li>
          <li>
            <Link to="/contact"><button className="nav-btn">Contact</button></Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
