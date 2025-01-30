/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        orange: "#F29C54",
        blue: {
          DEFAULT: "#1C9ADD", 
          2: "#94DBDE",
          3: "#013049",
          4: "#2DB2D6",
        },
        green: {
          DEFAULT: "#009DA5",
          2: "#029EA8",
          3: "#94DBDE",
        },
        bordergray : "#707070",
      },
      fontFamily: {
        title: ["var(--font-roboto)", "sans-serif"],
        subtitle: ["var(--font-ms-madi)", "cursive"],
        content: ["var(--font-source-sans-3)", "sans-serif"],
      },
      fontSize: {
        '9px'  : '0.563rem',
        '12px' : '0.63rem',
        '14px' : '0.8rem',
        '17px' : '1.063rem',
        '21px' : '1.313rem',
        '20px' : '1.3rem',
        '26px' : '1.625rem',
        '25px' : '1.5625rem',
        '30px' : '1.875rem',
        '35px' : '2.188rem',
        '45px' : '2.813rem',
        '47px' : '2.938rem',
      },
      lineHeight: {
        '22px' : '22px',
        '28px' : '28px',
        '31px' : '31px',
        '50px' : '50px',
      },
    },
  },
  plugins: [],
};
