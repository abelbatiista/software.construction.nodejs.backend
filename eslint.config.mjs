import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...prettierConfig.rules,
      'indent': ['error', 2],
      'prettier/prettier': ['error', { 'tabWidth': 2 }],
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'curly': 'error',
      'eqeqeq': 'error',
      'strict': ['error', 'global'],
      'arrow-parens': ['error', 'always'],
    },
  },
];
