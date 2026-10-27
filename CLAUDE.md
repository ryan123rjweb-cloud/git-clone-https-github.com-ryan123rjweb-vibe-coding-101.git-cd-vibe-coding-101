# Claude Code supplement

Read [`AGENTS.md`](./AGENTS.md) first. It's the real instructions file and
applies no matter what tool you're using. This file only adds four optional
skills that are specific to Claude Code's plugin system. If you're on a
different tool, skip this file; everything in `AGENTS.md` still applies, you
just won't have these four as installable skills (you can still follow their
ideas by hand, see `docs/prompting.md` and `docs/testing.md`).

Run the setup commands in [`SKILLS.md`](./SKILLS.md) once after cloning.
Then use them like this:

- **`grill-me`**: before locking in a plan or design, ask to be grilled on
  it. Use during the Clarify phase.
- **`tdd`**: enforces red, green, refactor and tests behavior at real
  seams instead of implementation details. Use during Build & Verify.
- **`ponytail`**: default execution mode. Don't write code that doesn't
  need to exist; reuse before adding; keep it minimal.
- **`caveman`**: use when a session is burning a lot of tokens on
  back-and-forth explanation rather than code.

## None of this is automatic

Installing these skills doesn't make the agent follow them by itself.
`grill-me` and `ponytail` only do anything when you invoke them (say "grill
me on this," run `/ponytail full`). Treat the list above as a checklist for
*you* to reach for, not a background process.
