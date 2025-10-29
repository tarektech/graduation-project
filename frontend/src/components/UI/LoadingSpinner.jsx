import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay center'} ${props.className}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
