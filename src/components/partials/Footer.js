import React from "react";

const Footer = () => {
  return (
    <footer id="footer"> <br /> <hr /> <br />
      <div className="anchors">
        <a className="anchors-footer" href="/home">
          Home
        </a>
        <a className="anchors-footer" href="/aboutus">
          About us
        </a>
        
        <a className="anchors-footer" href="/map">
          Map
        </a>
        <a className="anchors-footer" href="/contact">
          contact us
        </a>
        <a className="anchors-footer" href="/attractions">
          Attractions
        </a>
      </div>
      <div className="copyright">
        <div className="footer-container">
          <ul className="footer-ul">
            <li className="footer-li">
              <a href="home">site map</a>{" "}
            </li>
            <li className="footer-li">
              <a href="home">Terms of Use</a>
            </li>
            <li className="footer-li">
              <a href="home">Privacy Statements</a>{" "}
            </li>
          </ul>
          <ul>
          <li className="footer-li">
              &copy; 2023 Aaditya Acharya/Benjamin McQueen. <br />
              All rights reserved.
              <hr />
            </li>
            </ul>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
