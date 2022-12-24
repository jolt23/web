# Web

Personal Website

## Angular Getting Started

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## CI / CD

CI/CD runs through GitHub Actions. The full process executes with in the main branch were Angular application is build and then deployed using Ansible.

### CI Workflow

This workflow triggers on every PR and main branch commit. CI workflow performs an 'npm install' and an `npm run build -- --prod`, which is followed by
an artifact archival.

On main branch commits the CI worflow publishes to an S3 bucket using Ansible.

### CodeQL Workflow

This workflow triggers on every PR and main branch commit, as well as on a cron schedule. The CodeQL is looking for security vulnerabilities within the
JavaScript code.
