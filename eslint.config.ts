import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import path from "node:path";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: [path.resolve("./tsconfig.json")], // 👈 ensure absolute path
        tsconfigRootDir: path.resolve(), // 👈 set root directory
      },
    },
  },
]);
