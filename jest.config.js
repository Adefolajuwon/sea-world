module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'esbuild-jest', // Use esbuild for JSX support without Babel
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Remove or comment this line if you don't have a setup file
};
