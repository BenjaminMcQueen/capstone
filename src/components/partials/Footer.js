import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="anchors">
        <a className="anchors-footer" href="/home">
          Home
        </a>
        <a className="anchors-footer" href="/aboutus">
          About us
        </a>
        <a className="anchors-footer" href="/attractions">
          Attractions
        </a>
        <a className="anchors-footer" href="/contact">
          contact us
        </a>
      </div>
      <div className="copyright">
        <div className="container text-center">
          <ul>
            <li>
              <a href="home">site map</a>{" "}
            </li>
            <li>
              <a href="home">Terms of Use</a>
            </li>
            <li>
              <a href="home">Privacy Statements</a>{" "}
            </li>
          </ul>
          <ul>
            <li>&copy; 2023 Aaditya Acharya. All rights reserved.</li>
          </ul>
          <hr />
          <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
