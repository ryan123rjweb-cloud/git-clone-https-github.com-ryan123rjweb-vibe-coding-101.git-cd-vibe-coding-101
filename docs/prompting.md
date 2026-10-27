# Good prompt, bad prompt

An agent fills gaps you leave with guesses. A bad prompt leaves a lot of
gaps. A good prompt leaves almost none: it names the file, states the
constraint, and states how you'll know it worked.

## Example 1: a new feature

**Bad:**
> make the login work

Nothing here says where, what "work" means, or what happens on bad input.
The agent will guess a file structure, guess a validation rule, and guess
whether you wanted a "remember me" checkbox. Half those guesses will be
wrong, and you won't find out until you're staring at code you didn't ask
for.

**Good:**
> Add email + password login to `src/auth`. Reuse the existing `Form`
> component in `src/components`. Show an inline error if the email is
> malformed or the password is under 8 characters. Write a test for the
> happy path and both error cases.

Same request, but now the agent knows *where* (file), *what to reuse*
(constraint), *what "done" means* (behavior), and *how you'll check*
(tests).

## Example 2: a bug fix

**Bad:**
> fix the bug

**Good:**
> `add()` in `src/calc.py` returns a `TypeError` when passed a numeric
> string like `"2"`. Add a test in `tests/test_calc.py` that reproduces
> this, then fix `add` so it coerces numeric strings before adding.

The good version gives the agent a failing test to aim at, which is also
just TDD (see `docs/testing.md`). If you can't describe the bug specifically
enough to write that test, you don't understand the bug well enough yet to
ask for a fix.

## The pattern

Every good prompt in this project answers three questions:

1. **Where**: which file or part of the codebase?
2. **What constraint**: reuse what, avoid what, match what existing style?
3. **How will you know**: what test or behavior proves it worked?

## When your own idea is the vague part

Sometimes the prompt is fuzzy because *you* haven't decided the details yet,
not because you forgot to write them down. Don't let the agent guess at
your own unmade decisions. Say so, and get interrogated first:

> "Grill me on this before we build it."

That's the `grill-me` skill (see `SKILLS.md`). It exists specifically for
this moment, and it's the difference between a plan and a vibe.

## Don't over-correct into over-specifying

A good prompt is specific about *what matters*, not a full spec of every
line. If you find yourself writing paragraphs describing internal
implementation details, stop: that's a sign you should just write the code
yourself, or you're not trusting the agent to make any decisions at all.
Specify the behavior and the constraint; let it own the implementation.
