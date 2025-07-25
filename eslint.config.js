const tseslint = require('typescript-eslint');

module.exports = tseslint.config({
  files: ['src/**/*.ts'],
  extends: [
    ...tseslint.configs.recommended,
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
});