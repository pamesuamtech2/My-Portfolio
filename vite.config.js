import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        about: 'aboutme.html',
        index: 'index.html',
        skills: 'skills.html',
        projects: 'projects.html',
      }
    }
  }
})
