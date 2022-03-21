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
      },
      maxWidth: {
        content: "100rem",
      },
      padding: {
        content: "3.125rem",
      },
    },
  },
  plugins: [],
};
