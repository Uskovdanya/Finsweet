/** @type {import('tailwindcss').Config} */

import tailwindcssDebugScreens from "tailwindcss-debug-screens";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Sen: ["Sen"],
      },
      gridTemplateColumns: {
        homePageFeaturedPosts: "minmax(0, 733px) minmax(0, 517px)",
        section5Cols: "repeat(12, 106px)",
        section5ColsMd: "repeat(12, 78px)",
        section5ColsSm: "1fr",
        testimonialsCols: "minmax(0, 429px) minmax(0 , 628px)",
        testimonialsColsSm: "minmax(0 , 628px)",
        testimonialsAuthorCols: "minmax(0, 257px) minmax(0,134px)",
      },
      gridTemplateRows: {
        section1: "repeat(2, minmax(0, 1fr))",
        section5Rows: "repeat(6, minmax(0, 118px))",
        section5RowsMd: "repeat(6, minmax(0, 86px))",
        section5RowsSm: "1fr 1fr",
      },

      container: {
        center: true,
        padding: {
          xs: "10px",
          sm: "10px",
          md: "40px",
          xl: "80px",
          "2xl": "80px",
        },
        screens: {
          xs: "370px",
          sm: "550px",
          md: "768px",
          lg: "1024px",
          xl: "1440px",
          "2xl": "1620px",
        },
      },

      transitionTimingFunction: {},
      backgroundImage: {
        latestNews: "lightgray 50% / cover no-repeat, #C4C4C4",
        bgImage: "url('/bg-layer.png')",
        gradientBg:
          "radial-gradient(80.99% 71.93% at 74.58% 0%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)",
        //,url('./Hero.jpg')
        hotTopicGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 42.25%, rgba(0, 0, 0, 0.65) 100%);",
      },
      boxShadow: {
        border: "0px 6px 15px 0px rgba(0, 0, 0, 0.40)",
      },

      colors: {
        NavBarColor: "#232536",
        textColor: "#FFF",
        textGrayColor: "#4C4C4C",
        accentColor: "#FFD050",
        hoverColor: "#EDC14A",
        textBlackColor: "#232536",
        linkColor: "#592EA9",
        postsHover: "#FBF6EA",
        lavenderColor: "#F4F0F8",
        borderGray: "#6D6E76",
        iconActive: "#FBF6EA",
        lightGray: "#F4F4F4",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [tailwindcssDebugScreens],
};
