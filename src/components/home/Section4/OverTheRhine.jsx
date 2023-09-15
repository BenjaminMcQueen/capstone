import React from "react";

const OverTheRhine = () => {
  return (
    <div className="card">
      <h2 className="card_heading">Over-the-Rhine (neighborhood)</h2>
      <p className="card_info">
        Dive into the vibrant and eclectic neighborhood of Over-the-Rhine, where
        historic architecture, trendy boutiques, lively restaurants, and a
        thriving arts scene converge. Whether you're exploring its charming
        streets by day or enjoying the buzzing nightlife after sunset,
        Over-the-Rhine promises a delightful and culturally rich experience in
        the heart of Cincinnati.
      </p>
      <div className="m5">
        Historical Architecture<br/>
        Renovation and Revival<br/>
        Brewery Heritage<br/>
      </div>
      <button className="place-box">
        <a href="https://www.otrchamber.com/" className="more button">
        Learn More
        </a>
      </button>
    </div>
  );
};

export default OverTheRhine;
