module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'next/core-web-vitals',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    indent: ['error', 4],
    plugins: ['react', 'prettier'],

    rules: {
        'no-unused-vars': 'off',
        'no-console': 'warn',
        quotes: [2, 'single', { avoidEscape: true }],
        'comma-dangle': 'off',
        semi: ['error', 'always'],
        '@typescript-eslint/no-var-requires': 0,
    },
};
