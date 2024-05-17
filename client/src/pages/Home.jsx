import React, { useState, useEffect } from "react";

import MilkyWay from "../components/Intro.jsx";
import Header from "../components/Header.jsx";
import "./Home.css";

// import MilkyWay from "../components/Intro/MilkyWay.mp4";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [showWhiteScreen, setShowWhiteScreen] = useState(false);

  useEffect(() => {
    if (isVideoPlaying) {
            setTimeout(() => {
                setIsVideoPlaying(false);
                setShowWhiteScreen(true);
        }, 10000)
    }
    if(showWhiteScreen) {
        setTimeout(() => {
          setShowWhiteScreen(false);
        }, 1000);
    }
  }, [isVideoPlaying]);

  return (
    <>
      {isVideoPlaying && <MilkyWay />}
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
