import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "rc-slider/assets/index.css"; // this is necessary


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
