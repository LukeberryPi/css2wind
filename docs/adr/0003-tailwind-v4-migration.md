# 0003 Tailwind v4 Migration

## Status

Accepted

## Decision

Use `@tailwindcss/postcss`, `@import "tailwindcss"`, and CSS `@theme` tokens for app-specific spacing, breakpoints, colors, and animations.

## Context

Tailwind v4 moves configuration toward CSS-first setup. The app used `tailwindcss-3d` for a small input flip effect.

## Consequences

The PostCSS config is simpler, the old plugin is removed, and the few required 3D utilities are defined locally in CSS.
