/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily:{
        titulo: ['Julius Sans One'],
        custom: ['Sofadi One']
      },
      colors:{
        preto: {
          escuro: '#1B2727',
        },
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

