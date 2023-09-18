import React from "react";

const Ballpark = () => {
  return (
    <div className="card">
      <h2 className="card_heading">Great American Ball Park</h2>
      <p className="card_info">
        Experience the thrill of America's favorite pastime by catching a
        Cincinnati Reds baseball game at the iconic Great American Ball Park.
        Join the enthusiastic fans, savor ballpark snacks, and cheer for the
        home team as you immerse yourself in the rich history and excitement of
        baseball in Cincinnati.
      </p>
      <div className="m5">
        Big Red Machine<br/>
        First Professional Baseball Team<br/>
        The Gap
      </div>
      <button className="place-box">
        <a href="https://www.mlb.com/reds/" className="more button lighten-on-hover push-in-on-click">
        Learn More
        </a>
      </button>
    </div>
  );
};

export default Ballpark;
