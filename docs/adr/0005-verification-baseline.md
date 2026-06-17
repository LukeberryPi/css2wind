# 0005 Verification Baseline

## Status

Accepted

## Decision

Use TypeScript, ESLint, Vitest, and `next build` as the baseline verification suite.

## Context

The app needs coverage for mode selection, evaluation, persistence, and result text. End-to-end browser tests are intentionally removed from this project state.

## Consequences

Local verification runs through Bun: install dependencies, typecheck, lint, run unit tests, and produce a production build.
