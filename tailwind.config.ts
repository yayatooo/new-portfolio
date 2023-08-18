import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily : {
        'Poppins' : ['Poppins', 'sans-serif']
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
    },
  },
  plugins: [],
}
export default config
