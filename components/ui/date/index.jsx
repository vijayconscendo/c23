import React, { useState } from "react";

const DateInput = ({
  id,
  label,
  value,
  onChange,
  error,
  required = false,
  className = "",
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block font-medium mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type="date"
          id={id}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            focused
              ? "border-blue-500 focus:border-blue-500"
              : error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }`}
          required={required}
        />
        {error && (
          <p className="text-red-500 text-sm absolute bottom-0 transform -translate-y-full">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default DateInput;
