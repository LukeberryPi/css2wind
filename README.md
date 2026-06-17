# css2wind

[css2wind.com](https://www.css2wind.com/) is a small Next.js minigame for practicing CSS-to-Tailwind translations.

## Setup

Requirements:

- Bun 1.3 or newer

Install dependencies and start the local app:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `bun run dev`: start the Next.js development server.
- `bun run typecheck`: run TypeScript without emitting files.
- `bun run lint`: run ESLint.
- `bun run test`: run Vitest unit tests.
- `bun run build`: create a production build.

## Game Modes

The homepage defaults to the original Tailwind v3 game. Tailwind v4 is available through the compact `v3` / `v4` selector in the game UI.

Progress is stored per mode in localStorage:

- `css2wind:game:tailwind-v3`
- `css2wind:game:tailwind-v4`

The `/api/v1` endpoint remains compatible with the previous shape and returns the v3 dictionary.

## Verification

Before merging, run:

```bash
bun install
bun run typecheck
bun run lint
bun run test
bun run build
```
