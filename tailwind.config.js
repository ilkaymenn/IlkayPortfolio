module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        benimki: "#1b1b1a",
        benimki2: "#7D7D7A",
      },

      screens: {
        sm: "350px",
        //md: "768px",
        //lg: "976px",
        //xl: "1440px",
      },

      fontFamily: {
        gravitasOne: "Gravitas One",
        iceberg: "Iceberg",
        gowunBatang: "Gowun Batang",
      },

      fontSize: {
        grand: "1.5rem",
        big: "5rem",
      },
    },
  },
  plugins: [],
};
