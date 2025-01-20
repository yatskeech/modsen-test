export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
