import React from 'react';
import attractionscinn from "../images/attractionscinn.jpeg";

const Section1 = () => {
    return (
        <div className="section1">
            <div className="img-container">
                <img className="img" src={attractionscinn} alt="Cincinnati downtown" />
                {/* Content for image 1 */}
                <div className="overlay">
                    <h1 className="explore">Explore Downtown Cincinnati</h1>
                    <h4>Discover the beauty of Cincinnati's downtown ariel view</h4>
                </div>
            </div>
        </div>
    );
};

export default Section1;