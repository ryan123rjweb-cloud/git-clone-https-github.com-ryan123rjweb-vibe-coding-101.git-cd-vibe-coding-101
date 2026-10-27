# Skills setup (Claude Code only)

These are real, third-party skills, not vendored copies, so you always get
the current version. Run these once, right after you clone your copy.

**Skills as installable plugins are a Claude Code mechanism.** If you're on
a different tool, `AGENTS.md` already carries the workflow rules (BMAD,
testing, prompting) that apply regardless of tool. You just won't have
`grill-me`/`tdd`/`ponytail`/`caveman` as one-command installs. See
`docs/tooling.md` for picking a tool.

The installers below run through `npx`, so they need Node.js and Git
installed, plus the Claude Code CLI. (This has nothing to do with the
project's own language; the example code in `src/` is Python.)

## 1. BMAD: the planning framework

```
npx skills add bmad-code-org/BMAD-METHOD
```

Or as a Claude Code plugin:

```
/plugin marketplace add bmad-code-org/bmad-plugins
```

then install `bmad-method` from the marketplace list.

After install, ask your agent to run `bmad setup` once in this project.

## 2. grill-me: pressure-test a plan before you build it

```
npx skills@latest add mattpocock/skills
```

The installer will ask which skills you want: pick `grill-me` (and
`setup-matt-pocock-skills`, which the author recommends always including).

To use it, tell your agent "grill me on this" before you commit to a plan.
It will not do this on its own; its own definition disables model-initiated
use on purpose.

## 3. tdd: red, green, refactor

Comes from the same collection as `grill-me`:

```
npx skills@latest add mattpocock/skills
```

Pick `tdd` from the installer list too. It enforces writing a failing test
first, then the minimum code to pass it, and testing at real seams (public
behavior) instead of internals. See `docs/testing.md` for what that means
in practice.

## 4. ponytail: keep the agent from over-building

Claude Code plugin install (needs two separate prompts to complete):

```
/plugin marketplace add DietrichGebert/ponytail
```

```
/plugin install ponytail@ponytail
```

Switch intensity anytime with `/ponytail lite|full|ultra|off`. Left off,
it does nothing.

## 5. caveman: cut token spend on chatty sessions

```
npx skills add JuliusBrussee/caveman -g
```

Optional: the companion proxy compresses logs, diffs, and JSON before they
reach the model. Only bother with this once you're actually watching your
token costs:

```
npm install -g @caveman-ai/cli
caveman setup
```

## Verify

Ask your agent: "what skills do you have available?" It should list all
five.
