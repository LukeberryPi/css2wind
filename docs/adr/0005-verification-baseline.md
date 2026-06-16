# 0005 Verification Baseline

## Status

Accepted

## Decision

Use TypeScript, ESLint, Vitest, Playwright, and `next build` as the baseline verification suite.

## Context

The app needs coverage for mode selection, evaluation, persistence, result text, and the core homepage flow.

## Consequences

CI installs dependencies, runs typecheck, lint, unit tests, Playwright smoke tests, and production build. Playwright covers v3 default behavior, answer reveal, v4 switching, play again, and the answer modal.
