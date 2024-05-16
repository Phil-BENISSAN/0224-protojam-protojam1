import React, { useState, useEffect } from 'react';
import StardexCard from "../components/StardexCard/StardexCard";
import "../App.css";
import data from "../assets/protojam.json";

export default function Stardex() {
  const [jsonData, setJsonData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setJsonData(data);
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleCheckboxChange = (key) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [key]: true,
    }));

    setTimeout(() => {
      setCheckedItems((prevState) => ({
        ...prevState,
        [key]: 'completed',
      }));
    }, 1500); // 1000ms = 1 seconde
  };

  // Function to chunk the data into groups of 5
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Group the jsonData keys into chunks of 5
  const chunkedData = chunkArray(Object.keys(jsonData), 5);

  return (
    <>
      <h1 className="cartoon-title">Votre Bordodex !</h1>
      <div className="card-container">
        {chunkedData.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="row">
            {chunk.map((key) => {
              const item = jsonData[key];
              const isChecked = checkedItems[key];
              return (
                <div key={key} className="card" onClick={() => handleCardClick(item)}>
                  <h1 className="stardexCardTitle">{item.true_title}</h1>
                  <div className="first-content">
                    <img className="grandeOurs" src={item.image} alt={item.true_title} />
                  </div>
                  <div className="second-content">
                    <div className="replaceText">
                      <ul>
                        {item.info.map((infoItem, index) => (
                          <li key={index}>{infoItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {isChecked === 'completed' ? (
                    <p>Validé le {item.date}</p>
                  ) : (
                    <label className="container" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(key)}
                        disabled={isChecked === true}
                      />
                      <svg viewBox="0 0 64 64" height="2em" width="2em">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          className="path"
                        ></path>
                      </svg>
                    </label>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <main>
        <StardexCard />
      </main>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            {selectedItem && (
              <>
                <h1>{selectedItem.true_title}</h1>
                <p>{selectedItem.date}</p>
                <p>{selectedItem.details}</p>
                <ul>
                  {selectedItem.info.map((infoItem, index) => (
                    <li key={index}>{infoItem}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
