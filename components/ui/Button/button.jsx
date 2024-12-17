// Button.js
import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}) => {
  // Define base styles and variants
  const baseStyles = `font-semibold rounded-[5px] border-2 focus:outline-none transition duration-300 ease-in-out`;

  const variants = {
    primary: `bg-primary text-white border-primary hover:bg-white hover:text-white hover:border-white`,
    secondary: `bg-gray-500 text-white hover:bg-gray-600`,
    outline: `border-primary text-primary hover:bg-primary hover:text-white`,
    outlinetwo: `border-white text-white hover:bg-white hover:text-primary`,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
