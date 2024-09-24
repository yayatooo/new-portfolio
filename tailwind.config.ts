import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      fontFamily : {
        'Poppins' : ['Poppins', 'sans-serif'],
        'sans'  : ['var--poppinsSans-font']
      },
      colors : {
        'dark' : '#131312'
      },
      backgroundColor : {
        'dark' : '#131312',
        'light' : '#f4f4f2',
        'dark-secondary' : '#262626'
      },
      backgroundImage: {
        'pattern' : "url('../public/background.png')",
        'dotted' : "radial-gradient(rgb(202, 202, 202) 2px, transparent 2px)"
      },
      backgroundSize: {
        
      },
      screens: {
        'xs' : "250px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config