import { svgBuilder } from '/@/icons'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    svgBuilder('./src/icons/svg/')
  ],
  define: {
    'process.env': {
      // VUE_APP_BASE_API: 'http://192.168.2.128/manager' // Company developing env
      VUE_APP_BASE_API: 'http://localhost:9900/manager' // Local Pc developing env
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          /** Setting Antd Theme */
          // 'border-radius-base': '10px'
        },
        javascriptEnabled: true
      }
    }
  },
  // Remove log on build.
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})

