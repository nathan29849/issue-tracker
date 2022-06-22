module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|tsx?)$',
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@pages/(.*)': '<rootDir>/src/pages/$1',
    '^@styles/(.*)': '<rootDir>/src/styles/$1',
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@recoil/(.*)': '<rootDir>/src/recoil/$1',
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jsdom',
};
