# Vibe Coding 101: starter template

This is the companion repo for the Vibe Coding 101 class. This is a GitHub
**template repo**: click **Use this template** (top right) to get your own
copy with a clean history, no fork relationship back to this repo. You get
a project scaffold with agile planning structure and a testing floor
already in place, so those habits are the default, not an afterthought.

The project instructions live in [`AGENTS.md`](./AGENTS.md), with a
[`CLAUDE.md`](./CLAUDE.md) supplement. Open your coding tool in this project
folder and ask it to read those instructions before starting. See
[`docs/tooling.md`](docs/tooling.md) for tool options.

**Class slides:** https://claude.ai/code/artifact/bf8cf615-0233-4532-af57-d6208e7f6493
(interactive, arrow keys to navigate) or download [`slides/vibe-coding-101.pptx`](slides/vibe-coding-101.pptx) for the same deck in PowerPoint.

## None of this runs on its own

Using this template does not make an agent automatically follow BMAD,
grill you on a plan, or write minimal code. Those are things you have to
actually do or ask for, every time. Only one piece here is real automation
you don't have to remember: CI reruns the test suite on every push and pull
request, and separately fails the PR if `src/` changed without a matching
change in `tests/`. That catches "forgot to write a test entirely." It
does not catch "wrote a bad test," "wrote a lazy test," or "the test proves
nothing." That part is still on you. See `docs/testing.md`.

## Windows quick start

Install [Python](https://www.python.org/downloads/windows/) 3.10 or newer
(3.12 recommended) and [Git for Windows](https://git-scm.com/download/win).
Include the Python launcher when installing Python. Open PowerShell and
check `py --version` and `git --version`. Restart PowerShell after installing.

1. Click **Use this template** on GitHub to create your own repository.
2. Clone your copy. Replace `YOUR-USERNAME` and use the repository name you chose:

   ```powershell
   git clone https://github.com/YOUR-USERNAME/vibe-coding-101.git
   cd vibe-coding-101
   ```

3. Set up the project with one command:

   ```powershell
   py setup.py
   ```

   Setup creates `.venv`, installs the test dependency, copies `.env.example`
   to `.env` if it does not exist, and runs the tests. Internet access is
   needed to download dependencies. It is safe to rerun setup. If your Python
   installation provides `python` instead of `py`, use `python setup.py`.

4. Run the starter:

   ```powershell
   .\.venv\Scripts\python.exe src\app.py
   .\.venv\Scripts\python.exe src\app.py 12 7
   ```

   The first command prints:

   ```text
   Hello, Vibe Coding 101!
   2 + 3 = 5
   ```

   The second adds your own numbers. Run the tests any time with:

   ```powershell
   .\.venv\Scripts\python.exe -m pytest -q
   ```

No environment activation or PowerShell execution-policy change is needed.
The starter needs no API keys. Sign into your AI tool separately; leave the
optional key fields in `.env` empty unless your own app later needs them.
The starter does not read `.env`. Keep real keys out of Git and prompts.

## Your first feature

Open this project folder in your AI coding tool, or start its CLI from the
same PowerShell window. Use this first prompt:

> Read AGENTS.md and docs/prompting.md first. I want to extend the calculator
> in src/app.py with subtraction. Ask me how I want to choose the operation,
> then write a short plan in docs/planning/. Preserve the existing addition
> commands. Add tests for subtraction and invalid input, run the full suite,
> and tell me the command to try the result.

That gives you a working starting point and a clear way to check the change.
For your own project, describe your idea, clarify its requirements, fill in
`docs/planning/PRD.md`, and plan the architecture when needed. Every change
to `src/` gets a matching test in `tests/`. After shipping, add a row to the
Learn & Adjust table in `docs/planning/README.md`.

Claude Code users can optionally follow [`SKILLS.md`](./SKILLS.md). Those
installs also require Node.js and tool access; they are separate from the
starter setup and can wait until the basic example works.

## Checks and repository settings

GitHub Actions runs tests on pushes and pull requests. A separate pull-request
check catches changes to `src/` with no changes under `tests/`. To enforce
passing checks before merging, configure branch protection or a ruleset in
your own repository and require both checks. Template copies must configure
their own repository settings. A failing check alone does not prevent a merge
on an unprotected branch.

## Why this scaffold looks the way it does

| Piece | Purpose |
|---|---|
| `setup.py` | Creates the local Python environment, installs dependencies, and checks the starter |
| `src/app.py` | Runnable calculator to extend with your first feature |
| `.env.example` | Empty optional API key fields for future features |
| `AGENTS.md` | Tells your agent how this project works, no matter which tool you use |
| `CLAUDE.md` + `SKILLS.md` | Optional, Claude Code only: four skills that are one-command installs of the same habits, still manual to invoke |
| `docs/tooling.md` | Picking a tool, including free options |
| `docs/prompting.md` | Good prompt vs. bad prompt, with real examples |
| `docs/testing.md` | Test case vs. scenario vs. suite, unit/integration/e2e, the red-green-refactor loop |
| `docs/planning/` | BMAD's Plan step: forces decisions into writing before code exists |
| `.github/workflows/test.yml` | The one real automation: reruns tests, and fails a PR if `src/` changed with no change under `tests/` |
| `.github/pull_request_template.md` | A checklist that shows up on every PR as a reminder, not an enforcement mechanism |

## What's BMAD?

[BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) is the planning
framework this template follows: **Clarify, Plan, Build & Verify, Learn &
Adjust.** Full detail in `docs/planning/README.md`.
