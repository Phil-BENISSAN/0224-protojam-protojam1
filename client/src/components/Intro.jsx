import React from "react";

const MilkyWay = () => {
  return (
    <div className="video-container">
      <video>
        <source src="./src/assets/MilkyWay.mp4" />
        Your video cannot be played at the moment.
      </video>
    </div>
  );
};

export default MilkyWay;
