# Web

Joel Guilartes Personal Website [joelguilarte.com](http://joelguilarte.com)

## Angular Getting Started

### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run build:prod` flag for a production build.

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## GitHub Actions Workflow

CI/CD runs through GitHub Actions. The workflow has to jobs defined, one job handles builds

### CI Workflow

This workflow triggers on each PR and main branch commit.

#### PR Builds

All PR's trigger the build job defined in the ci-workflow. This job handles downloading dependencies, executing tests and deploying to GitHub Pages. As well as archiving a production build artifact.
