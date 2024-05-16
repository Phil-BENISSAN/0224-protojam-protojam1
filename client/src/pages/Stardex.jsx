import React, { useState, useEffect } from 'react';
import StardexCard from "../components/StardexCard/StardexCard";
import "../App.css";
import data from "../assets/protojam.json";

export default function Stardex() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <>
     <h1 className="cartoon-title">Votre Bordodex !</h1>
      <div className="card-container">
        <div className="center">
          {Object.keys(jsonData).map((key) => {
            const item = jsonData[key];
            return (
              <div key={key} className="card">
                <div className="card-content">
                    <h1 className="stardexCardTitle">{item.true_title}</h1>
                  <div className="image-container">
                    <img className="imgCard" src={item.image} alt={item.true_title} />
                    
                  </div>
                  <div className="info-container">
                    <p>{item.date}</p>
                    <ul>
                      {item.info.map((infoItem, index) => (
                        <li key={index}>{infoItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
      <main>
        <StardexCard />
      </main>
    </>
  );
}
