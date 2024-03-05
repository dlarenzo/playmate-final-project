module.exports = function ({ addUtilities }) {
  const utilities = {
    ".gradient-radial": {
      backgroundImage: "radial-gradient(var(--tw-gradient-stops))",
    },
    ".gradient-conic": {
      backgroundImage:
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    ".header-padding": {
      paddingTop: "8rem",
      fontSize: "1.5rem",
    },
  };
  addUtilities(utilities, ["responsive", "hover"]);
};
