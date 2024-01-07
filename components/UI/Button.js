import React from "react";

const Button = ({ children, type, disabled, className, onClick }) => {
  return (
    <button
      className={className}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
