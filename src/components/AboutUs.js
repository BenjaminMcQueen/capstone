import React from "react";
import Aaditya from "./images/Aaditya.jpeg";
import Benjamin from "./images/benjamin.jpeg";

function AboutUs() {
  return (
    <div>
      <div className="image-details-row">
        <div className="image-container">
          <img src={Aaditya} alt="Aaditya Acharya" />
        </div>
        <ul className="details-list">
          <h3>Aaditya Acharya</h3>
          <li>HTML 5</li>
          <li>CSS3</li>
          <li>Bootstrap 5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>MongoDB/noSQL</li>
          <li>react/redux</li>
        </ul>
      </div>

      <div className="image-details-row">
        <div className="image-container">
          <img src={Benjamin} alt="Benjamin McQueen image" />
        </div>
        <ul className="details-list">
          <h3>Benjamin</h3>
          <li>HTML 5</li>
          <li>CSS3</li>
          <li>Bootstrap 5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>MongoDB/noSQL</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
