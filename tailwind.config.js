module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{mdx,tsx,jsx,js,ts}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spoqa: ["Spoqa Han Sans Neo"],
        noto: ["Noto Sans KR"],
        pretendard: ["Pretendard"],
        nanum: ["Nanum Gothic"],
        score: ["S-CoreDream-4Regular"],
        gothicA1: ["Gothic A1"],
      },
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
  plugins: [require("@tailwindcss/typography")],
};
