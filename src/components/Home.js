import React from "react";

import Section1 from "./home/Section1";
import Section2 from "./home/Section2";
import Section3 from "./home/Section3";
import Section4 from "./home/Section4";


function Home() {
  return (
    <div className="home-container">
      {/* Top Image/"Explore Downtown Cincinnati" */}
      <Section1 />

      {/* History/Culture/Attractions/Sports */}
      <Section2 />

      {/* Why Visit Cincinnati? */}
      <Section3 />

      {/* Top 5 things to do in Cincinnati */}
      <Section4 />
    </div>
  );
}

export default Home;
