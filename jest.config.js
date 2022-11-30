module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "src"],
  collectCoverageFrom: [
    "src/**/*.{js,ts,tsx}",
    "!**/node_modules/**",
    "!**/__mocks__/**",
    "!src/**/*.data*",
    "!src/**/*.d.ts",
    "!src/**/*.data",
    "!src/App.tsx",
  ],
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  coverageReporters: ["lcov"],
  coverageDirectory: `./reports`,
  roots: ["<rootDir>/src/"],
  testRegex: "\\.test\\.(ts|tsx|js)$",
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svg.tsx",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};
