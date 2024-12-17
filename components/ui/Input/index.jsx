import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import styles from "./input.module.scss";
import Label from "../label";

const Input = ({
  id,
  label,
  type = "text",
  labelClassName = "#000000e5",
  value,
  onChange,
  error,
  required = false,
  className = "",
  forgotPwdCta = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-10 lg:mb-12">
      <div className={styles.inputContainer}>
        <Label
          labelClassName={labelClassName}
          label={label}
          required={required}
        />
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            id={id}
            type={showPassword ? "text" : type}
            value={value}
            onChange={onChange}
            required={required}
            {...props}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-2 text-black focus:outline-none"
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
        {forgotPwdCta && (
          <button className={styles.forgotPassword}>Forget Password?</button>
        )}
        {error && <p className={styles.message}>Enter Valid Input</p>}
      </div>
    </div>
  );
};

export default Input;
