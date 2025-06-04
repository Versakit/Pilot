// @see https://eslint.org/docs/latest/use/configure/

import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'

export default [
  {
    ignores: ['dist', 'node_modules', 'packages/ui/icons/*'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.vue'],
    ...vuePlugin.configs['vue3-recommended'],
    languageOptions: {
      parser: vuePlugin.configs['vue3-recommended'].parser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,vue}'],
    languageOptions: {
      globals: {
        process: 'readonly',
        defineRender: 'readonly',
      },
    },
    rules: {
      'no-var': 'error',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'no-unexpected-multiline': 'error',
      'no-useless-escape': 'off',
    },
  },
]
