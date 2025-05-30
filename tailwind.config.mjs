/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F1D',
        secondary: '#F5F4F2', 
        accent: '#F4D047',
        // También puedes usar las variables CSS
        'primary-var': 'var(--primary)',
        'secondary-var': 'var(--secondary)',
        'accent-var': 'var(--accent)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Poppins', 'system-ui', 'sans-serif'], // Cambia la fuente por defecto
      }
    }
  },
  plugins: []
}