import React from "react";
import styles from "./radio-button.module.scss";
import Label from "../label";

const RadioGroup = ({ label, required, options, hasInput = false }) => {
  return (
    <div className={hasInput ? "" : "mb-12"}>
      <Label label={label} required={required} />
      <div className="flex flex-wrap gap-x-8 gap-y-5 items-end mt-7">
        {options?.length > 0 &&
          options.map((option, index) => (
            <div className={styles.radioButton} key={index}>
              <input
                className={styles.radioInput}
                id={option?.value}
                type="radio"
                name={option?.name}
              />
              <label className={styles.radio} htmlFor="male">
                {option?.label}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RadioGroup;
