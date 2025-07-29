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
          title: 'Raam Prathap | Full Stack Developer',
          description: 'Portfolio of Raam Prathap showcasing full stack, ML, and research work.',
          keywords: 'Raam Prathap, Full Stack Developer, ML Developer, Portfolio, React Developer, NodeJS',
          author: 'Raam Prathap Rajarathinam',
        },
      },
    }),
  ]
})
