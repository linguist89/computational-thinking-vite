import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup")
  return {
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
    base: "/computational-thinking-vite/",
    plugins: [
      react(),
      mdx.default({ remarkPlugins: [] }),
      viteStaticCopy({
        targets: [
          { src: './src/assets', dest: './dist/assets' }
        ]
      })
    ],
  }
})
