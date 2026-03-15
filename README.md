# Joel Guilarte — Personal Website

This repository contains a React + TypeScript frontend (migrated from Angular) and Firebase hosting configuration.

Overview

- Framework: React 18 + TypeScript
- Bundler: Vite
- Routing: react-router-dom
- Testing: Vitest + Testing Library
- Linting: ESLint + Prettier
- Hosting: Firebase Hosting (output: `dist/web`)

Quick start

1. Install dependencies:

```bash
npm ci
```

2. Create local environment file (see `.env.example`):

```
cp .env.example .env.local
# then edit .env.local and paste your VITE_FIREBASE_* values
```

3. Run dev server:

```bash
npm run dev
```

Build & preview

```bash
npm run build
npm run preview
```

Testing

```bash
npm run test
npm run test:coverage
```

Lint & format

```bash
npm run lint
npm run format
```

Husky / pre-commit

Husky is installed; after clone run:

```bash
npm run prepare
```

This sets up a `pre-commit` hook that runs `pretty-quick --staged` and `eslint` on staged files.

Environment variables / Firebase

This project uses Vite env variables. Required keys (in `.env.local`) are:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

- `src/firebase.ts` reads `import.meta.env.VITE_FIREBASE_*` and initializes Firebase.
- Do NOT commit any `.env.*` files; they are ignored by `.gitignore`.

Firebase deploy

```bash
npm run build
npx firebase deploy --only hosting
```

CI / GitHub Actions

- Make sure CI injects `VITE_FIREBASE_*` variables prior to `npm run build`.
- Provide a `FIREBASE_TOKEN` secret to run `npx firebase deploy --only hosting` in CI.

Example GitHub Actions snippet (build + deploy):

```yaml
name: Build & Deploy
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - name: Build
        env:
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}
        run: npm run build
      - name: Deploy
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
        run: npx firebase deploy --only hosting
```

Project layout (important files)

- `src/main.tsx` — React entry
- `src/App.tsx` — Router + app shell
- `src/pages/*` — route pages (Home, SecondPage)
- `src/components/*` — React components
- `src/assets` — static assets (css/js/img/lib)
- `src/firebase.ts` — Firebase initializer
- `vite.config.ts` — Vite config (root `src`, publicDir `assets`, outDir `../dist/web`)
- `firebase.json` — Firebase hosting config (rewrites for SPA)

Migration notes

- This repository was migrated from Angular to React. Legacy Angular configuration and build tooling were removed.
- A few legacy styles (`src/app/app.component.scss`) were kept and imported into the React entry to preserve look-and-feel.

Removing Angular files

- The following Angular-specific files were removed: `angular.json`, `karma.conf.js`, `tsconfig.app.json`, `tsconfig.spec.json`, and Angular bootstrap/test polyfills. The project now uses Vite, Vitest, and React tooling.

Troubleshooting

- If your Firebase config isn't applied in production, confirm your CI injects `VITE_FIREBASE_*` before running `npm run build`.
- If lint fails, run `npm run lint` locally and fix issues or ask me to adjust ESLint rules.

Want help?

If you'd like I can:

- Add a full `.github/workflows/deploy.yml` workflow file
- Add CONTRIBUTING.md with style rules
- Add sample auth flows (Firebase Auth) and example Firestore usage

Open an issue or ask me which of the above you'd like me to implement next.
