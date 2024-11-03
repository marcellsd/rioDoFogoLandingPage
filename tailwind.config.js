/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily:{
        titulo: ['Julius Sans One'],
        custom: ["Poppins"]
      },
      colors:{
        preto: {
          escuro: '#1B2727',
        },
        amareloClaro:'#fefce8',
        amarelo: '#FF9E02'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
      }

      addUtilities(newUtilities)
    }
  ],
}

