const path = require('path');

module.exports = {
    extends: ['eslint-config-airbnb-base', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    rules: {
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'no-console': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                useTabs: false,
                tabWidth: 2,
                trailingComma: 'all',
                printWidth: 140,
                bracketSpacing: true,
                endOfLine: 'auto',
            },
        ],
    },
    parser: 'babel-eslint',
    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': ['.js', '.jsx'],
        'import/resolver': {
            webpack: {
                config: path.resolve(__dirname, 'webpack.config.js'),
            },
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],

            rules: {
                // Prevent TypeScript-specific constructs from being erroneously flagged as unused
                '@typescript-eslint/no-unused-vars': 'error',
                // Require PascalCased class and interface names
                '@typescript-eslint/class-name-casing': 'error',
                // Require a specific member delimiter style for interfaces and type literals
                // Default Semicolon style
                '@typescript-eslint/member-delimiter-style': 'error',
                // Require a consistent member declaration order
                '@typescript-eslint/member-ordering': 'error',
                // Require consistent spacing around type annotations
                '@typescript-eslint/type-annotation-spacing': 'error',
            },
        },
    ],
};
