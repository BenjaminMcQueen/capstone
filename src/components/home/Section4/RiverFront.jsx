import React from "react";

const RiverFront = () => {
  return (
    <div className="card">
      <h2 className="card_heading">Ohio Riverfront (Downtown)</h2>
      <p className="card_info">
        Discover the serenity and beauty of the Ohio River as you leisurely
        stroll along its picturesque riverfront. The scenic views, charming
        parks, and bustling riverboats provide a perfect backdrop for a relaxing
        afternoon or a romantic evening, making it a must-visit destination for
        those seeking tranquility and natural beauty in Cincinnati.
      </p>
      <ul className="m5">
        <li>Underground Railroad History</li>
        <li>Paddlewheelers</li>
        <li>Spectacular Sunsets</li>
      </ul>
      <button className="place-box">
        <a
          href="https://www.cincinnati-oh.gov/cincyparks/visit-a-park/find-a-parkfacility/smale-riverfront-park/"
          className="more button"
        >
          Find more
        </a>
      </button>
    </div>
  );
};

export default RiverFront;
