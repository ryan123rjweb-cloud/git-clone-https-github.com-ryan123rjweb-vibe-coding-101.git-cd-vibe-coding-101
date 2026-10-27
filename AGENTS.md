# Agent instructions

This file is read by nearly every AI coding tool. Copilot, Cursor, Codex,
Windsurf, Aider, Zed, Antigravity, and Claude Code all pick it up
automatically. Whatever tool you're using for this class, this is the file
that tells it how to behave in this project. (Using Claude Code? It also
reads [`CLAUDE.md`](./CLAUDE.md), which adds four optional skills on top of
this.)

## How we work here: BMAD

This project follows the [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)
delivery loop. Don't jump straight to code. Move through:

1. **Clarify**: turn a vague idea into a concrete, written problem statement.
   Interrogate your own idea before committing to it. See
   [`docs/prompting.md`](docs/prompting.md).
2. **Plan**: write it down in `docs/planning/` (PRD + architecture). Small
   changes can skip straight to a short plan; big changes deserve a real one.
3. **Build & Verify**: implement, and write tests as you go, following
   [`docs/testing.md`](docs/testing.md). Nothing merges without a passing
   test suite (`pytest`, wired into CI already).
4. **Learn & Adjust**: after shipping, note what you'd do differently in
   `docs/planning/README.md` so the next round starts smarter.

## Non-negotiable: tests

Every change that touches `src/` needs a test in `tests/`. This is the one
habit vibe coders skip and regret. See `docs/testing.md` for what actually
makes a test worth writing. CI (`.github/workflows/test.yml`) fails your PR
if tests don't pass, and separately fails it if `src/` changed but `tests/`
didn't. Don't disable either check to get a change through.

## How to prompt in this project

Read [`docs/prompting.md`](docs/prompting.md) before your first session. The
short version: name the file, state the constraint, state how you'll know
it worked. If you're not sure your own idea is well formed yet, ask the
agent to interrogate it before it writes any code.

## Style

- Prefer editing existing files over creating new ones.
- No speculative abstractions. Build for the requirement in front of you.
- Reuse before you add: check the codebase, then the standard library,
  before writing something new.
- Keep commit messages short and in the imperative mood.
