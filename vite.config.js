import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
/* import sqlite3 from '@sqlite3/vite' */

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()/* , sqlite3() */],
})
