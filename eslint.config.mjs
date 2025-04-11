import nextPlugin from 'eslint-config-next';

export default [
  ...nextPlugin,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: ['node_modules', '.next', 'out', 'build'],
  },
];