import React from "react";
import sportscinn from "../../images/sportscinn.jpeg";

const Sports = () => {
  return (
    <div className="sports">
      <h3>Sports</h3>
      <div className="container">
        <div className="row">
          <p className="cul-att-spo-para">
            Cincinnati is home to passionate sports fans. Cincinnati's history
            in sports reads like a playbook of passion and triumph. From roaring
            crowds at Riverfront Stadium to the electrifying chants echoing
            through Great American Ball Park, the city has woven its love for
            sports into the very fabric of its identity. Legendary figures like
            the Big Red Machine have etched their names in baseball lore, while
            the Bengals have brought football fever to life on crisp autumn
            Sundays. Cincinnati isn't just a spectator; it's a player, from
            hosting the first professional baseball team to fostering the
            vibrant tennis community of the Western & Southern Open. With
            rivalries that spark fireworks and fans that roar with pride,
            Cincinnati's sports history is a testament to its enduring love
            affair with the games that keep hearts racing and spirits soaring.
          </p>
          <img
            className="cult-att-spo-img"
            src={sportscinn}
            alt="cincinnati Sports spot"
          />
        </div>
      </div>
    </div>
  );
};

export default Sports;
