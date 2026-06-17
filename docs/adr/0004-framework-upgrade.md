# 0004 Framework Upgrade

## Status

Accepted

## Decision

Upgrade the app to Next 16.2.9, React 19.2.7, React DOM 19.2.7, Tailwind CSS 4.3.1, `@tailwindcss/postcss` 4.3.1, PostCSS 8.5.15, Prettier 3.8.4, and `prettier-plugin-tailwindcss` 0.8.0.

Use Bun as the package manager and command runner. Keep linting, typechecking, unit tests, and production build as explicit Bun-run scripts.

## Context

The app was previously on an old Next 13 canary, React 18, Tailwind 3, and `next lint`. Next 16 and Tailwind 4 require config updates, including modern ESLint flat config and the Tailwind v4 PostCSS plugin.

## Consequences

The app uses stable framework versions and a Bun lockfile. The homepage avoids self-fetching its own API and imports dictionary data in process.
