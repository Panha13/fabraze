import React from "react";

const ReusableButton = ({ className, onClick, children }) => (
  <button
    className={`uppercase py-2 px-4 text-md bg-darkest text-white ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export { ReusableButton };
