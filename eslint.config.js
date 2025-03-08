import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // Ignore patterns (migrated from .eslintignore)
  {
    ignores: ['node_modules/**', 'dist/**']
  },
  js.configs.recommended,
  {
    files: ['**/*.vue'],
    ...pluginVue.configs['vue3-recommended']
  },
  {
    files: ['**/*.js', '**/*.vue'],
    ...prettier
  },
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly'
      }
    },
    rules: {
      'no-async-promise-executor': 0,
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  }
];
