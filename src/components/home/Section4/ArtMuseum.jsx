import React from 'react';

const ArtMuseum = () => {
    return (
        <div className="card">
            <h2 className="card_heading">Cincinnati Art Museum</h2>
            <p className="card_info">
                Immerse yourself in the world of art at the Cincinnati Art Museum, where a diverse collection of masterpieces from various cultures and time periods await your exploration. From ancient artifacts to contemporary works, this museum offers a captivating journey through human creativity and expression2
            </p>
            <div className="m5">
                Impressive Collection<br/>
                Free Admission<br/>
                Ancient Artifacts
            </div>
            <button className="place-box">
            <a href="https://www.cincinnatiartmuseum.org/" className="more button">
            Learn More
            </a>
            </button>
        </div>
    );
};

export default ArtMuseum;