import * as core from '@actions/core';
import * as github from '@actions/github';

export async function run() {
  const {repo, owner} = github.context.repo
  core.info(`Hello from repository ${repo} own by ${owner}`)
}