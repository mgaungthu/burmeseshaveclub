import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      // Static export serves the original assets without a Next.js image server.
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
    },
  },
  globalIgnores([
    "out/**",
    ".next/**",
    "next-env.d.ts",
    "playwright-report/**",
    "test-results/**",
  ]),
]);
