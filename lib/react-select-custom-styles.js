export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: "62px",
    fontFamily: "var(--font-montserrat)",
    fontWeight: 600,
    fontSize: "14px",
    color: "#000000",
    borderColor: "#000000",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#000000",
    },
    // Focused state
    ...(state.isFocused && {
      borderColor: "#000000 !important",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#000000",
      },
    }),
    "@media (min-width: 1700px)": {
      height: "60px",
    },
  }),
  input: (provided) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#000000",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: 500,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#0000004D",
  }),
  // Add styles for the menu to maintain consistent appearance
  menu: (provided) => ({
    ...provided,
    fontFamily: "var(--font-montserrat)",
    fontSize: "14px",
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: "var(--font-montserrat)",
    fontSize: "14px",
    fontWeight: 500,
    backgroundColor: state.isFocused ? "#f0f0f0" : "white",
    color: "#000000",
    "&:active": {
      backgroundColor: "#e0e0e0",
    },
  }),
};
