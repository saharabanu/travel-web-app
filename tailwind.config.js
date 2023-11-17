/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'banner-image': "url('https://i.ibb.co/3MQC6dn/banner.jpg')",
      },
    }
  },
  plugins: [],
}


