import React from 'react';
import './mapDisplayStyle.css';

const MapDisplay = () => {
  return (
    <div className="map-container">
      <img
        src="https://via.placeholder.com/300x150?text=Map+of+Tunisia" // Replace with actual map image URL
        alt="Map of Tunisia"
        className="map-image"
      />
    </div>
  );
};

export default MapDisplay;