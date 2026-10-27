# Planning docs

This folder is where the "Plan" step of BMAD lives. Don't skip straight to
code. Even a rough version of these documents forces decisions to become
explicit instead of getting buried inside whatever the agent happened to
generate.

- **`PRD.md`**: what you're building and why. Fill this in during Clarify,
  refine it during Plan. Use the `grill-me` skill on it before moving on.
- **`architecture.md`**: how you're building it. Only needed once the PRD
  is stable enough that "how" is a real question, not a guess.

## Learn & Adjust log

Windows starter plan: provide one setup command using an isolated Python
environment, an optional environment template, and a calculator with visible
output. Verify installation, repeat setup, and the starter's inputs and errors.

After each milestone, add a dated entry below. This is the part of BMAD
people skip. Don't.

| Date | What shipped | What you'd do differently next time |
|------|---------------|--------------------------------------|
| 2026-10-06 | Replace the presentation with the supplied clean deck, retaining the existing download path. | Keep the repository filename stable when updating slides so existing links continue to work. |
| 2026-10-13 | Add Windows setup and a runnable calculator starter. | Include a visible first run and copyable setup commands before introducing optional skills. |
