/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: ["./public/**/*.html"],
  theme: {

    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'}
    },
    wrapper:{
      padding: '20px'
    },
    
    extend: {},
  },
  plugins: [],
}