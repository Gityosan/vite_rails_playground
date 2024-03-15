import { defineConfig } from 'vite'
import ruby from 'vite-plugin-ruby'
import FullReload from "vite-plugin-full-reload"

export default defineConfig({
  plugins: [
    ruby(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 100 }),
  ],
})
