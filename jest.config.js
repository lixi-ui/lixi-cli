// console.log('执行----');
module.exports = {
    "testRegex": "(/jest/.+\\.(js|jsx)$)|button._test.jsx?$",
    "collectCoverageFrom": [
        "<rootDir>/src/component-ui/*.{js,jsx}",
    ],
    "collectCoverage": true,
    "coverageDirectory":  "<rootDir>/tests/coverage",
    "testPathIgnorePatterns": [
        "<rootDir>/tests",
        "<rootDir>/dist",
        "<rootDir>/node_modules",
        "<rootDir>/lib",
        "<rootDir>/mock",
        "<rootDir>/public",
        "<rootDir>/script",
        "<rootDir>/server",
    ],
    "setupFiles": ["<rootDir>/tests/jest/config.js"],
    "transform": {
        "\\.[jt]sx?$": "babel-jest",
        // "^.+\\.tsx?$": "ts-jest",
    },
}