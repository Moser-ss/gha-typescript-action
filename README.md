# gha-typescript-action

Template to create a TypeScript Action with tests, linting, workflow, publishing, and versioning.

Inspired from https://github.com/actions/typescript-action and https://github.com/int128/typescript-action with a sparkling of my working experience of developing GHA using typescript

## Features

- Ready to develop with the minimum configs
  - NPM
  - Prettier
  - ESLint
  - tsconfig
  - Jest
  - SonarCloud
- Automated continuous release
- Keep consistency of generated files
- Report code quality to SonarCloud

## Getting Started

Click `Use this template` to create a repository.

An initial release `v0.0.0` is automatically created by GitHub Actions.
You can see the generated files in `dist` directory on the tag.

Then checkout your repository and test it. Node.js is required.

```console
$ git clone https://github.com/your/repo.git

$ npm ci
$ npm test
```

Create a pull request for a change.

```console
$ git checkout -b feature
$ git commit -m 'Add feature'
$ gh pr create -fd
```

Once you merge a pull request, a new minor release (such as `v0.1.0`) is created.

### Stable release

When you want to create a stable release, change the major version in [release workflow](.github/workflows/release.yaml).

```yaml
- uses: int128/release-typescript-action@v1
  with:
    major-version: 1
```

Then a new stable release `v1.0.0` is created.

## Specification

To run this action, create a workflow as follows:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: <org>/<repository>@v1
        with:
          name: John
```

### Inputs

| Name   | Default    | Description   |
| ------ | ---------- | ------------- |
| `name` | (required) | example input |

### Outputs

| Name      | Description    |
| --------- | -------------- |
| `example` | example output |

## Development

### Release workflow

When a pull request is merged into main branch, a new minor release is created by GitHub Actions.
See https://github.com/int128/release-typescript-action for details.

### Keep consistency of generated files

If a pull request needs to be fixed by Prettier, an additional commit to fix it will be added by GitHub Actions.
See https://github.com/int128/update-generated-files-action for details.

### Dependency update

The dependency update is hanlde by depeandabot

### Code Quality

You can enable code quality using SonarCLoud
This repository is shipped with the [config](https://docs.sonarcloud.io/advanced-setup/analysis-parameters/#setting-configuration-in-a-file) and workflow to report the data to SonarCloud
Just add the SONAR_TOKEN to your repository like mention in the [SonarCloud docs](https://docs.sonarcloud.io/advanced-setup/ci-based-analysis/github-actions-for-sonarcloud/#github-actions-for-sonarcloud)
