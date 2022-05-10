const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{mdx,tsx,jsx,js,ts}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        historySelectedColor: "#fff",
        historyColor: "#555555",
        "antller-black": "#1A1A1A",
        gray: "#999999",
        divider: "#e3e4e5",
      },
      maxWidth: {
        content: "75rem",
        sliderDescription: "87.5rem",
      },
      padding: {
        content: "2.8125rem",
      },
      margin: {
        header: "155px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
