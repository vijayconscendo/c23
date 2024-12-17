import styles from "./label.module.scss";

function Label({ label, required, labelClassName }) {
  return (
    <span className={styles.labelName} style={{ color: labelClassName }}>
      {required && <sup className="text-primary inline-block">*</sup>}
      {label}
    </span>
  );
}

export default Label;
