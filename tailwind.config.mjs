import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pridi', ...defaultTheme.fontFamily.sans],
        heading: ['Mitr'],
        default: defaultTheme.fontFamily.sans,
      },
    },
  },
  plugins: [],
}
