import React from "react";

const Zoo = () => {
  return (
    <div className="card">
      <h2 className="card_heading">Cincinnati Zoo & Botanical Garden</h2>
      <p className="card_info">
        Embark on a wildlife adventure at the Cincinnati Zoo & Botanical Garden,
        one of the oldest zoos in the United States. This family-friendly
        destination not only showcases a diverse array of exotic animals but
        also boasts stunning botanical gardens, offering a perfect blend of
        education and natural wonder.
      </p>
      <div className="m5">
        Fiona the Hippo<br/>
        Botanical Diversity:<br/>
        Conservation Efforts<br/>
      </div>
      <button className="place-box">
        <a href="https://cincinnatizoo.org/" className="more button">
          Find more
        </a>
      </button>
    </div>
  );
};

export default Zoo;
