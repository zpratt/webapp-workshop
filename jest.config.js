const nextJest = require('next/jest');

const configBuilder = nextJest({
    dir: './'
});

const moduleMapper = {
    '@/(.*)$': '<rootDir>/src/$1'
};
module.exports = configBuilder({
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: moduleMapper,
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
});
