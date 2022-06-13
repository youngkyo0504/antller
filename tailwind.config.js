const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{mdx,tsx,jsx,js,ts}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loop: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
      },

      animation: {
        "infinite-loop": "loop 20s linear infinite",
      },

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
        "mo-content": "1.25rem",
      },
      margin: {
        header: "155px",
        "mo-header": "90px",
        content: "2.8125rem",
        "mo-content": "1.25rem",
        "about-item": "9rem",
        "mo-about-item": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
