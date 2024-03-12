/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1" : "#004567",
        "primary-2" : "#47A6C2",
        "primary-3" : "#111111",
        "primary-4" : "#F5F5F5",
        "secondary-1" : "#B4CADB",
        "secondary-2" : "#0A6B92",
        "black" : "#000000"
      },
      fontFamily: {
        "montserrat" : ["Montserrat", "sans-serif"],
        "karla" : ["Karla", "sans-serif"]
      },
      fontSize: {
        "m-64" : "64px",
        "m-30" : "30px",
        "m-27" : "27px",
        "m-18" : "18px",
        "m-16" : "16px",
        "k-20" : "20px",
        "k-16" : "16px"
      },
      important: true
    },
    screens: {
      "sm" : "640px",
      "md" : "748px",
      "lg" : "1024px"
    }
  },
  plugins: [],
}