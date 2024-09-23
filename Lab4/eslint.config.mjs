import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import stylistic from '@stylistic/eslint-plugin'

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,

  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
        "@stylistic/brace-style": ["warn", "stroustrup"],
        'prettier/prettier': "warn",
        "no-unused-vars": "warn",
        "no-undef": "warn",
    },
  },
  eslintConfigPrettier,
];