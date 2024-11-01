// #region ESLINT.config

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import tseslintParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier/recommended'

export default [
  prettier,
  //pluginJs.configs.recommended,
  //pluginReact.configs.flat.recommended,
  //...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      react: pluginReact,
      eslint: pluginJs,
      'typescript-eslint': tseslint
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        jsxPragma: null // for @typescript/eslint-parser
      },
      globals: globals.browser
    },
    rules: {
      'react-hooks/rules-of-hooks': 2,
      'react-hooks/exhaustive-deps': 1,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 2,
      'typescript-eslint/explicit-module-boundary-types': 0
    }
  }
]

// #endregion
