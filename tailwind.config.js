/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        moon:["icomoon"],
        sm:["sm"],
        gt1:["grotest1"],
        gt2:["grotest2"],
        extra:["extra"],
        nm1:["nm1"],
        nm2:["nm2"],
      }
    },
    
  },
  plugins: [],
}