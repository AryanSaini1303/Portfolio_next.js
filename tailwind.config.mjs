/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        concert:['Concert One', 'sans-serif'],
        playwrite:['Playwrite US Modern', 'sans-serif'],
      },
      boxShadow:{
        inner: 'inset 0 0 8px 0 rgba(0,0,0,0.5)',
      },
      blur:{
        custom:'2px'
      },
    },
  },
  plugins: [],
};
