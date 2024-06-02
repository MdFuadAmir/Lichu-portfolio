

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme:{
      Container:{
        center:true,
        padding: "15px",
      },
      screen:{
        sm:"640px",
        md:"768px",
        lg:"960px",
        xl:"1200px"
      }
    },
    extend: {
      colors:{
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        }
      }
    },
  },
  plugins: [require('daisyui'),],
}

