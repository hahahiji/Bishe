import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  server:{
    host:'0.0.0.0',
    open:true,
  },
  resolve:{
    // 别名配置
    alias:{
      '@':resolve(__dirname,'./src')
    }
  }
})
