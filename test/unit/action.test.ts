import * as core from '@actions/core';
import { when } from 'jest-when';
import { run } from '../../src/action';

jest.mock('@actions/core');

describe('run', () => {
	it('should log Hello mesage', async () => {
		const dummyName = "Jae";
		when(core.getInput).calledWith('name').mockReturnValue(dummyName);
		process.env.GITHUB_REPOSITORY = 'foo/bar';

		await run();

		const expectedMessage = `Hello ${dummyName} from repository bar own by foo`;
		expect(core.info).toHaveBeenCalledWith(expectedMessage);
		expect(core.setOutput).toHaveBeenCalledWith('greetings_msg', expectedMessage);
	});
});
