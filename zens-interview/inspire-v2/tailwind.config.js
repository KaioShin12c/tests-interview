/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#22AC66",
        "secondary-color": "#E7F6EE",
        "third-color": "#F8FFFB",
        purple: "#799BFE",
        "black-color": "#393838",
        "primary-text": "#6D6B6B",
        "secondary-text": "#605E5E",
        "third-text": "#424143",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        regular: "0px 3px 3px rgba(0,0,0,0.16 )",
      },
      fontSize: {
        "13px": "13px",
        "21px": "21px",
        "28px": "28px",
        "29px": "29px",
        "32px": "32px",
        "69px": "69px",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/line-clamp"),
  ],
};
