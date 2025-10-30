import PropTypes from 'prop-types';

import './LoadingSpinner.css';

const LoadingSpinner = (props) => {
  return (
    <div
      className={`${props.asOverlay && 'loading-spinner__overlay center'} ${
        props.className
      }`}
    >
      <div className="lds-dual-ring"></div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  asOverlay: PropTypes.bool,
  className: PropTypes.string,
};

export default LoadingSpinner;
