# AGENTS.md

## Project

Pairwise Evaluation System for university students.

## Setup & Commands

- install: `npm ci`
- dev: `npm run dev`
- test: `npm test`
- lint: `npm run lint`
- build: `npm run build`

## Conventions

- Language: TypeScript
- Use `data-testid`
- Conventional Commits
- Branch: feature/* → develop

## Rules for agents

- Run tests before proposing changes.
- Never modify tests just to make them pass.
- Never commit secrets.
- Ask before editing memory-bank.
- Large changes (>200 lines) require confirmation.