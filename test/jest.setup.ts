const env = process.env;

beforeEach(() => {
	jest.resetAllMocks();
	jest.restoreAllMocks();
	jest.clearAllMocks();

});

afterEach(() => {
	process.env = env;
});