import React from 'react';

const ArtMuseum = () => {
    return (
        <div className="card">
            <h2 className="card_heading">Cincinnati Art Museum</h2>
            <p className="card_info">
                Immerse yourself in the world of art at the Cincinnati Art Museum, where a diverse collection of masterpieces from various cultures and time periods await your exploration. From ancient artifacts to contemporary works, this museum offers a captivating journey through human creativity and expression2
            </p>
            <ul className="m5">
                <li>Impressive Collection</li>
                <li> Free Admission</li>
                <li>Ancient Artifacts</li>
            </ul>
            <button className="place-box">
            <a href="https://www.cincinnatiartmuseum.org/" className="more button">
                Find more
            </a>
            </button>
        </div>
    );
};

export default ArtMuseum;