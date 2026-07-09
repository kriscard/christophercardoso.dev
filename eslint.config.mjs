import path from "node:path"
import { fileURLToPath } from "node:url"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import tailwindcss from "eslint-plugin-tailwindcss"
import { defineConfig, globalIgnores } from "eslint/config"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores(["**/node_modules"]),
  ...nextCoreWebVitals,
  ...compat.extends("prettier"),
  tailwindcss.configs.recommended,
  {
    plugins: {
      tailwindcss,
    },

    settings: {
      tailwindcss: {
        callees: ["cn"],
        cssConfigPath: "./styles/global.css",
      },

      next: {
        rootDir: true,
      },
    },

    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-unnecessary-arbitrary-value": "off",
      "tailwindcss/classnames-order": "off",
    },
  },
])
