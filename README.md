# css2wind

[css2wind.com](https://www.css2wind.com/) is a small Next.js minigame for practicing CSS-to-Tailwind translations.

## Setup

Requirements:

- Node.js 24 or newer
- npm

Install dependencies and start the local app:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: start the Next.js development server.
- `npm run typecheck`: run TypeScript without emitting files.
- `npm run lint`: run ESLint.
- `npm run test`: run Vitest unit tests.
- `npm run test:e2e`: run the Playwright homepage smoke test.
- `npm run build`: create a production build.

## Game Modes

The homepage defaults to the original Tailwind v3 game. Tailwind v4 is available through the compact `v3` / `v4` selector in the game UI.

Progress is stored per mode in localStorage:

- `css2wind:game:tailwind-v3`
- `css2wind:game:tailwind-v4`

The `/api/v1` endpoint remains compatible with the previous shape and returns the v3 dictionary.

## Verification

Before merging, run:

```bash
npm install
npm run typecheck
npm run lint
npm run test
npm run test:e2e
npm run build
```

CI runs the same verification sequence with `npm ci`.
