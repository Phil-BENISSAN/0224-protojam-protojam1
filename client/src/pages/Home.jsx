import React, { useState, useEffect } from "react";

import MilkyWay from "../components/Intro.jsx";
import Header from "../components/Header.jsx";
import "./Home.css";

// import MilkyWay from "../components/Intro/MilkyWay.mp4";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [showWhiteScreen, setShowWhiteScreen] = useState(false);

  useEffect(() => {
    if (MilkyWay) {
        MilkyWay("ended", () => {
            setTimeout(() => {
                setIsVideoPlaying(false);
              }, 10000);
        setTimeout(() => {
          setShowWhiteScreen(false);
        }, 1000);
      });
    }
  }, [false]);

  return (
    <>
      {isVideoPlaying && (
        <video id="MilkyWay" autoPlay muted>
          <source src="assets/MilkyWay.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {showWhiteScreen && <div className="white-page"></div>}
      {!showWhiteScreen && !isVideoPlaying && (
        <>
          <Header />
          <h3 id="ferme-richemont"></h3>
          <h3 id="teste-de-buch"></h3>
          <h3 id="toit-wilde"></h3>
        </>
      )}
    </>
  );
}
