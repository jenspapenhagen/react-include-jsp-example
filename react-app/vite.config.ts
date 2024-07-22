import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//more infos: https://github.com/originjs/vite-plugin-federation
export default defineConfig({
  plugins: [react()],
})
