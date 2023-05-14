module.exports = {
  ...require('./test/jest.common'),
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/**/index.js'],
  coverageThreshold: {
    global: {
      statements: 35,
      branches: 20,
      functions: 31,
      lines: 35,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
  projects: ['./test/jest.client.js', './test/jest.server.js'],
}
