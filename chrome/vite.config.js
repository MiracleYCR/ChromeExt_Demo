import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

export default defineConfig(({ command, mode }) => {
  return {
    base: '/',

    define: {
      chromeConfig: {
        appInfos: {
          name: 'Chrome Extension',
          version: '1.0.0'
        }
      }
    },

    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      },
      extensions: ['.js', '.json']
    },

    build: {
      rollupOptions: {
        input: {
          main: require('path').resolve(__dirname, 'index.html'),
        },
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        }
      },
    },
  
    plugins: [
      vue(),
      copy({
        targets: [
          {
            src: 'manifest.json',
            dest: 'public'
          },
          {
            src: './src/assets/logo.png',
            dest: 'public/assets'
          },
          {
            src: './src/content-script.js',
            dest: 'public/assets'
          },
          {
            src: './src/background.js',
            dest: 'public/assets'
          }
        ]
      }),
    ]
  }
})