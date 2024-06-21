import React from "react";
import PropTypes from "prop-types";

const ReusableButton = ({ className, onClick, children }) => (
  <button
    className={`uppercase py-2 px-4 text-md bg-darkest text-white ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
ReusableButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
}; // Add propType
export { ReusableButton };
