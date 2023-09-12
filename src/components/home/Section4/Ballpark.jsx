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
      <ul className="m5">
        <li>Big Red Machine</li>
        <li>First Professional Baseball Team</li>
        <li>The Gap</li>
      </ul>
      <button className="place-box">
        <a href="https://www.mlb.com/reds/" className="more button ">
          Find more
        </a>
      </button>
    </div>
  );
};

export default Ballpark;
