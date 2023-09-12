import React from "react";
import cincinnatiDowntown from "../../images/cincinnatiDowntown.jpeg";

const HomepageAttractions = () => {
  return (
    <div className="attractions">
      <h3>Attractions</h3>
      <div className="container">
      <div className="row">
        <p className="cul-att-spo-para">
          Cincinnati's allure lies in its myriad attractions that span the
          spectrum of interests. Delve into its rich history at the National
          Underground Railroad Freedom Center, where the echoes of emancipation
          resonate. Embark on a wild adventure at the Cincinnati Zoo & Botanical
          Garden, one of the oldest in the nation, where endangered species find
          sanctuary. The city's architectural gems, like the iconic Carew Tower,
          offer breathtaking skyline views, while a journey on the Cincinnati
          Bell Connector streetcar winds through scenic routes. For sports
          enthusiasts, the Great American Ball Park and Paul Brown Stadium stand
          as citadels of athletic excitement. Whether you're drawn to history,
          nature, architecture, or sports, Cincinnati's attractions beckon with
          a diverse array of experiences that cater to every curiosity.
        </p>
        <img
          className="cult-att-spo-img"
          src={cincinnatiDowntown}
          alt="cincinnati attractions"
        />
      </div>
    </div>
    </div>
  );
};

export default HomepageAttractions;
