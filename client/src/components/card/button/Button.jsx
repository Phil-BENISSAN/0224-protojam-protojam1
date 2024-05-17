import PropTypes from 'prop-types';
import './button.css';

const Button = ({ onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      Show Info
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Button;