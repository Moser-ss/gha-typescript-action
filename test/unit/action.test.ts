import * as core from '@actions/core';

import { run } from '../../src/action';

describe('run', () => {
	it('should log Hello mesage', async () => {
		const spy = jest.spyOn(core, 'info');
		process.env.GITHUB_REPOSITORY = 'foo/bar' 
		await run();
		expect(spy).toHaveBeenCalledWith('Hello from repository bar own by foo');
	});
});
