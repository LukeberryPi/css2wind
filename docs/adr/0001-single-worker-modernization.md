# 0001 Single Worker Modernization

## Status

Accepted

## Decision

Modernize the existing app in one branch while preserving the default Tailwind v3 minigame behavior.

Implementation was delegated to a single `gpt-5.5` worker using low reasoning effort. The parent process retained responsibility for review, verification oversight, git operations, and PR preparation.

## Context

The app was on older Next, React, and Tailwind dependencies, and the game state was concentrated in one large client component.

## Consequences

The migration can update dependencies, tests, CI, and internal game structure together. Behavior changes must remain explicit, with Tailwind v4 exposed only through an opt-in selector.
