import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Raam Prathap | Full Stack Developer Portfolio',
          description: 'Portfolio of Raam Prathap, a passionate full-stack developer skilled in React, Node.js, and AI/ML integration.',
          keywords: 'Raam Prathap, full stack developer, React developer, Node.js developer, AI engineer, web developer portfolio',
          author: 'Raam Prathap',
          canonical: 'https://raam-prathap.vercel.app/',
        }
      }
    })
  ]
})
