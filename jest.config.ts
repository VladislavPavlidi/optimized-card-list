module.exports = {
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`/node_modules/(?!nanoid)`],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^nanoid(/(.*)|$)': 'nanoid$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  clearMocks: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
};
