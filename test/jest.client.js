module.exports = {
  ...require('./jest.common'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  snapshotSerializers: ['@emotion/jest/serializer'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
