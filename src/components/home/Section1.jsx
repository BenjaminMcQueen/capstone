import React from "react";
import attractionscinn from "../images/attractionscinn.jpeg";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="img-container">
        <img className="img" src={attractionscinn} alt="Cincinnati downtown" />
        {/* Content for image 1 */}
        <div className="overlay">
          <h1 className="explore">Explore Downtown Cincinnati</h1>
          <h4>Discover the beauty of Cincinnati's downtown ariel view</h4>
          <div class="anchor-box">
            <a
              href="https://www.google.com/search?q=cincinnati+visit&oq=cincinnati+visit&aqs=chrome..69i57j69i64j69i60.4333j0j4&sourceid=chrome&ie=UTF-8#ip=1"
              target="_blank"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
