import React from "react";
import cincinnatimusichall from "../../images/cincinnatimusichall.jpeg";

const Culture = () => {
  return (
    <div className="culture">
      <h2>Culture</h2>
      <div className="container">
        <div className="row">
          <p className="cul-att-spo-para">
            From its historic neighborhoods to modern galleries, Cincinnati's
            cultural journey is a captivating tapestry of tradition and
            innovation. Stroll through the Over-the-Rhine district, where
            cobblestone streets whisper stories of immigrant roots, and
            intricate architecture showcases the city's past. Art enthusiasts
            find their haven at the Cincinnati Art Museum, where masterpieces
            from around the world create a dialogue across centuries. But
            Cincinnati doesn't merely honor the past; it embraces the present
            with dynamic galleries and creative spaces that pulse with
            contemporary energy. As the city evolves, its cultural scene dances
            between timeless charm and avant-garde expression, an ever-changing
            melody that reflects Cincinnati's passion for both heritage and
            exploration.
          </p>

          <img
            className="cult-att-spo-img"
            src={cincinnatimusichall}
            alt="cincinnati culture"
          />
        </div>
      </div>
    </div>
  );
};

export default Culture;
