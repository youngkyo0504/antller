module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "antller-black": "#1A1A1A",
        gray: "#999999",
        divider: "#e3e4e5",
      },
      maxWidth: {
        content: "100rem",
      },
      padding: {
        content: "3.125rem",
      },
      margin: {
        header: "155px",
      },
    },
  },
  plugins: [addBasePlugin],
};
function addBasePlugin({ addBase }) {
  const baseStyles = {
    ".my-class": {
      display: "block",
    },
    "section .my-class": {
      marginTop: "5px",
    },
    '[type="button"] .my-class': {
      backgroundColor: "black",
    },
  };
  addBase(baseStyles);
}
