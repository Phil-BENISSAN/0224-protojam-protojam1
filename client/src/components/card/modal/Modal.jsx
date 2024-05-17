import PropTypes from "prop-types";
import "./modal.css";

const Modal = ({ onClose, info }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="modal-body">
          {info.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Modal;
