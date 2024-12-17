import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./dropdown.module.scss";
import Label from "../label";

const Dropdown = ({ label, options, required }) => {
  return (
    <div className="mb-12">
      <Label label={label} required={required} />
      <Select className={styles.customSelect}>
        <SelectTrigger className={`${styles.trigger}`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={styles.options}>
          {options?.length > 0 &&
            options?.map((option, index) => (
              <SelectItem value="light" key={index}>
                {option?.label}
              </SelectItem>
            ))}
          {/* <SelectItem value="light">One</SelectItem>
          <SelectItem value="dark">Two</SelectItem>
          <SelectItem value="system">Three</SelectItem> */}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
