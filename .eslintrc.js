module.exports = {
    extends: ['plugin:react/recommended', 'prettier'],
    plugins: ['react', 'import', 'prettier'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        requireConfigFile: false,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 0,
        'max-len': [
            'error',
            {
                code: 80,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreComments: true,
            },
        ],
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
