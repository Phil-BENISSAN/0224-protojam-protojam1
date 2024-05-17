import React, { useState } from 'react';
import './Trophies.css';
import trophy1 from '../assets/images/Trophy1.png';
import trophy2 from '../assets/images/Trophy2.png';
import trophy3 from '../assets/images/Trophy3.png';
import LockedTrophy from '../assets/images/LockedTrophy.png';

const Trophies = () => {
  const placeholders = Array.from({ length: 20 });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTrophy, setSelectedTrophy] = useState(null);

  const handleTrophyClick = (index) => {
    setSelectedTrophy(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedTrophy(null);
  };

  const getTrophyImage = (index) => {
    if (index === 0) return trophy1;
    if (index === 1) return trophy2;
    if (index === 2) return trophy3;
    return LockedTrophy; // Utilisation de l'image générique pour les autres cases
  };

  const trophyMessages = {
    0: "Participer à 3 événements d'affilée !",
    1: 'Participer à 5 événements au total, bravo !',
    2: 'Visiter Bordonautes au moins 100 fois, merci pour votre soutien !',
    3: "???",
    4: "???",
    5: "???",
    6: "???",
    7: "???",
    8: "???",
    9: "???",
    10: "???",
    11: "???",
    12: "???",
    13: "???",
    14: "???",
    15:"???",
    16:"???",
    17: "???",
    18: "???",
    19: "???",
  };

  return (
    <div className="trophies-container">
      <h1 className="trophies-title">Mes trophées</h1>
      <div className="trophies-grid">
        {placeholders.map((_, index) => (
          <div 
            key={index} 
            className="trophy-placeholder"
            onClick={() => handleTrophyClick(index)}
          >
            <img src={getTrophyImage(index)} alt={`Trophée ${index + 1}`} className="trophy-image" />
          </div>
        ))}
      </div>
      
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>X</button>
            <h2>Trophée {selectedTrophy + 1}</h2>
            <p>{trophyMessages[selectedTrophy]}</p>
            <img src={getTrophyImage(selectedTrophy)} alt={`Trophy ${selectedTrophy + 1}`} className="popup-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Trophies;
