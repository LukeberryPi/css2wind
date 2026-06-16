# 0002 Game Mode Registry

## Status

Accepted

## Decision

Represent game modes with `GameMode = "tailwind-v3" | "tailwind-v4"` and load dictionaries from a typed registry.

Store progress under `css2wind:game:<mode>` and persist answer history as `{ css, answers }`.

## Context

The game and API previously imported a single dictionary from the API folder. Adding Tailwind v4 requires mode-specific data without making client code reverse-lookup globals.

A single `sessionProgress` key mixed progress across modes and answer history only stored answer arrays, forcing the answer modal to reverse-lookup the dictionary.

## Consequences

The v3 dictionary remains the default and backs `/api/v1`. The v4 dictionary starts as parity data, with answer differences added only when verified.

Switching modes keeps progress isolated. The answer modal can render from saved history and no longer imports a global dictionary.
