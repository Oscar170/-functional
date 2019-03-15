module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'clover'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    globals: {
        'ts-jest': {
            extends: './babel.config.js',
        },
    },
    moduleFileExtensions: ['ts', 'js'],
    notify: true,
    notifyMode: 'always',
    roots: ['<rootDir>packages'],
    testMatch: ['**/*.spec.ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
};
