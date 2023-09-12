import React from 'react'
import ArtMuseum from './Section4/ArtMuseum';
import RiverFront from './Section4/RiverFront';
import Zoo from './Section4/Zoo';
import Ballpark from './Section4/Ballpark';
import OverTheRhine from './Section4/OverTheRhine';

const Section4 = () => {
  return (
    <div className="main">
        <h1 className="main_heading">Cincinnati's top 5 most visited places</h1>
        <div className="cards">
          <div className="cards_inner">
            <ArtMuseum />
            <RiverFront />
            <Zoo />
            <Ballpark />
            <OverTheRhine />
          </div>
        </div>
      </div>
  )
}

export default Section4