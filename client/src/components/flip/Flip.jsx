import PropTypes from "prop-types";
import { useState } from 'react'
import "./flip.css";
import Button from "../card/button/Button";
import Modal from "../card/modal/Modal";

const propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    true_title: PropTypes.string.isRequired,
    info: PropTypes.arrayOf(PropTypes.string).isRequired,
    details: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const Flip = ({ data }) => {
  const { date, true_title, details, image, info } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <small className="badge">{true_title}</small>
            <img src={image} alt={true_title} className="card-img" />
            <small className="badge">Prévue : {date}</small>
          </div>
        </div>
        <div className="front">
          <div className="front-content">
            <div className="description">
              <p className="card-footer">{details}</p>
            </div>
            <Button className="btn" onClick={handleClick} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={handleClose} info={info} />
      )}
    </div>
  );
};

Flip.propTypes = propTypes;

export default Flip;
