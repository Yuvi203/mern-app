import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    envCompatible()
  ],
  envPrefix:"REACT",
  server:{
    port:3000,
    proxy:{
      '/api':{
        target:"http://localhost:8000/",
        secure:false
      }
    }
     
  },
  preview:{
    port:5000
  }
  
})
