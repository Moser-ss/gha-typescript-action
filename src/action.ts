import * as core from '@actions/core';
import * as github from '@actions/github';

export async function run() {
	const name = core.getInput('name');
	const { repo, owner } = github.context.repo;
	const greetingsMsg = `Hello ${name} from repository ${repo} own by ${owner}`;
	core.info(greetingsMsg);
	core.setOutput('greetings_msg', greetingsMsg);
}
