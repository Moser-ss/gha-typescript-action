/** @type {import('jest').Config} */
const config = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['<rootDir>/test/**/*.test.ts?(x)'],
	moduleFileExtensions: ['ts', 'js', 'json'],
	modulePathIgnorePatterns: ['<rootDir>/dist/'],
	verbose: true,
	cacheDirectory: '.jest-cache',
	setupFilesAfterEnv: ['./test/jest.setup.ts'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,ts}'],
	transform:{
		'^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'test/tsconfig.json',
      },
    ],
	}
};

module.exports = config;