// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const fromRoot = (d) => path.join(__dirname, d)

module.exports = {
  roots: [fromRoot('app')],
  resetMocks: true,
  collectCoverageFrom: [
    '**/app/**/*.ts(x)?',
    '!**/app/**/stories.tsx',
    '!**/app/routes/**',
    '!**/app/context/**',
    '!**/app/hooks/**',
    '!**/app/styles/**',
    '!**/app/types/**',
    '!**/app/utils/**',
    '!**/app/services/**',
  ],
  collectCoverage: true,
  coverageThreshold: null,
  testEnvironment: 'jsdom',
  "transform": {
    "^.+\\.tsx?$": [
      "esbuild-jest",
      {
        sourcemap: true,
        loaders: {
          '.spec.ts': 'tsx'
        }
      }
    ]
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/app/$1",
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  },
}
