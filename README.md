# React Express Turbo

This a starter Turborepo with React frontend and Express backend.

### Apps and Packages

- `backend`: an [Express](https://expressjs.com/) server
- `frontend`: a [Vite](https://vitejs.dev/) single page app
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json is used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Using this repo

Run the following command:

```sh
git clone https://github.com/alexrusin/react-express-turbo.git
cd react-express-turbo
pnpm install
pnpm build
pnpm dev
```

## Testing and linting

```sh
pnpm lint
pnpm test
```
