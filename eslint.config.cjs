/* eslint-disable @typescript-eslint/no-var-requires */
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const reactPlugin = require('eslint-plugin-react')

// plugin recommended configs
const tsRecommended =
  tsPlugin.configs && tsPlugin.configs.recommended
    ? tsPlugin.configs.recommended
    : {}
const reactRecommended =
  reactPlugin.configs && reactPlugin.configs.recommended
    ? reactPlugin.configs.recommended
    : {}

// helper to merge rule objects
const merge = (...objs) => Object.assign({}, ...objs.filter(Boolean))

module.exports = [
  // global ignore patterns (replaces .eslintignore)
  {
    ignores: [
      'node_modules',
      'dist',
      '.husky',
      '*.config.js',
      '*.d.ts',
      'coverage',
      '/.cache',
      '.vscode',
    ],
  },

  // apply rules to JS/TS/JSX/TSX files (flat config: merge plugin recommended configs)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
    },
    // merge recommended rules and settings from plugins, then apply overrides
    rules: merge(tsRecommended.rules, reactRecommended.rules, {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'react/react-in-jsx-scope': 'off',
    }),
    settings: merge(tsRecommended.settings, reactRecommended.settings, {
      react: { version: 'detect' },
    }),
    // include any languageOptions from recommended plugin configs and set parser
    languageOptions: merge(
      tsRecommended.languageOptions,
      reactRecommended.languageOptions,
      {
        parser: require('@typescript-eslint/parser'),
        parserOptions: {
          ecmaVersion: 2021,
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      }
    ),
  },
]
