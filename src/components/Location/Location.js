import React from 'react';
import './Location.css';

function Location() {
  return (
    <div className="location-container">
      <div className="content-container">
        <div className="address">
          <h1 className="location-header">Location</h1>
          <div className="highlight">Second Student Centre</div>
          <p className="address-text">15 Library Ln, North York, ON M3J 2S5</p>
        </div>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5762.131290354127!2d-79.506286724505!3d43.771496144772726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e258e6f6e4d%3A0x55e10c9ba7b8b997!2sSecond%20Student%20Centre!5e0!3m2!1sen!2sca!4v1732464278190!5m2!1sen!2sca"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
