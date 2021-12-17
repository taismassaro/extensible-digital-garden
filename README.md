# Extensible Digital Garden

This project was developed from [@juristr](https://twitter.com/juristr)'s course on [egghead.io](https://egghead.io/courses/architect-an-extensible-digital-garden-with-next-js-tailwind-and-nx-53f7628f)

It uses [Nx](https://nx.dev/) to setup a monorepo that holds a [Next.js](https://nextjs.org) application, a [React](https://reactjs.org) UI library with [Storybook](https://storybook.js.org) and [TailwindCSS](https://tailwindcss.com), markdown support with [MDX](https://mdxjs.com) and e2e tests with [Cypress](https://www.cypress.io)

## Development server

Run `npx nx serve` for a dev server. Navigate to http://localhost:4200/.

## Running unit tests

Run `npx nx test` to execute the unit tests via [Jest](https://jestjs.io).

Run `npx nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `npx nx e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand the workspace

Run `npx nx dep-graph` to see a diagram of the dependencies of your projects.
