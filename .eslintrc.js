module.exports = {
  root: true,
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      files: ['src/**/*.{ts,tsx}'],
      parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json',
      },
      extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      rules: {
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 1,
        'react/jsx-filename-extension': [
          1,
          { extensions: ['js', 'jsx', 'ts', '.tsx'] },
        ],
      },
    },
  ],
  plugins: ['react'],
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['js', 'jsx', 'ts', '.tsx'],
        moduleDirectory: ['node_modules'],
      },
    },
  },
  rules: {
    'no-use-before-define': 0,
    'react/jsx-props-no-spreading': 0,
    'react/display-name': 1,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['js', 'jsx', 'ts', '.tsx'] },
    ],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
