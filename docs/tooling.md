# Picking an AI tool

This project doesn't require a specific AI coding tool. The instructions
live in [`AGENTS.md`](../AGENTS.md), which is a cross-tool standard now read
natively by GitHub Copilot, Cursor, Codex CLI, Windsurf, Aider, Zed, and
Claude Code, so whichever tool you or your school already has access to
will pick up the same rules. Use whatever you've got; don't buy something
new to take this class.

## If you don't already have one, in order of free and generous enough for a class project

1. **GitHub Copilot**: free tier for everyone (unlimited code completions;
   chat/agent requests are metered, but the free allotment is workable for a
   class project). If you have a school email, get **Copilot Pro free**
   through the [GitHub Student Developer Pack](https://education.github.com/pack),
   which also bundles a lot of other free dev tools worth having anyway.
2. **Google Antigravity**: free in public beta for personal use. An
   agentic IDE built around Gemini models.
3. **Grok Build** (xAI): free to try; check current limits before relying
   on it for a multi-week project.

## If your school or job already pays for one

- **Claude Code**: no meaningful free tier for agentic use (the free
  Claude.ai plan doesn't include it); needs Pro ($20/mo) or API credits.
  This is what the four optional skills in `CLAUDE.md`/`SKILLS.md` are
  built for. If you have access, use it, but nothing in `AGENTS.md`
  depends on it.
- **ChatGPT / Codex CLI**, **Cursor**, **Windsurf**: all read `AGENTS.md`
  natively, same workflow, different interface.

## What doesn't change based on which one you pick

- BMAD's Clarify, Plan, Build & Verify, Learn & Adjust loop
- The testing requirement and CI checks
- The prompting habits in `docs/prompting.md`

The four Claude Code skills (`grill-me`, `tdd`, `ponytail`, `caveman`) are
convenience: one-command installs of habits you can just as well follow by
hand in any tool. Don't let not having Claude Code stop you from following
the same process.
