# Testing, past "write some tests"

"Write tests" isn't specific enough to actually do. This is the vocabulary
and the loop that makes it a habit instead of a vague good intention.

## The vocabulary

**Test scenario**: a real situation you want to be true, described in
plain language. "A user can pay for two items and a discount code at
checkout." One scenario, zero code yet.

**Test case**: one specific input/output pair that checks part of a
scenario. The checkout scenario above breaks into several cases: a cart
with two full-price items, a cart with a discount applied, a cart where the
discount code is invalid. Each case is one test function.

**Test suite**: the file (or folder) that groups the test cases covering
one scenario or one unit. `tests/test_calc.py` is a tiny suite.

So: a scenario is the thing you're actually promising works, test cases are
how you prove each part of that promise, and a suite is where they live.

## The three levels

| Level | Tests | Example in this project |
|---|---|---|
| **Unit** | one function/module, in isolation | `add()` gets the right total for two numbers |
| **Integration** | several units working together | an API route that calls `add()` and writes the result to a database |
| **End-to-end (e2e)** | the whole system, the way a user actually hits it | a browser test that opens the app, clicks "checkout," and confirms the total shown on screen is correct |

Unit tests are cheap and fast, so write a lot of them. E2E tests are slow
and brittle but they're the only ones that catch "the pieces work alone but
not together," so write a few, on your most important user-facing flows
only. This project's starter test (`tests/test_calc.py`) is a unit test; if
you add a real feature with a UI, that feature deserves at least one e2e
test on its main path, not just unit tests on its pieces.

## What makes a test worth writing

Not every assertion is equally useful. Two failure modes to watch for
(credit: [mattpocock/skills' `tdd` skill](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md)):

- **Implementation-coupled**: the test mocks internals or checks private
  details, so it breaks when you refactor even though behavior didn't
  change. Test at the **seam**, the public interface, not how it's built
  inside. "User can check out with a valid cart" survives a rewrite of the
  checkout internals; "checkout calls `calculate_tax()` then
  `apply_discount()`" doesn't.
- **Tautological**: the test recomputes the same logic as the
  implementation to get its expected value, so it passes by construction
  and catches nothing. Expected values should come from somewhere
  independent: a known-good example, a spec, or just a plain number you
  worked out by hand. `add(2, 3)` should equal `5`, checked as the literal
  `5`, not as `2 + 3` recomputed.

## The loop: red, green, refactor

1. **Red**: write the failing test first, for the smallest next slice of
   behavior. Don't write the implementation yet.
2. **Green**: write the minimum code that makes it pass. Resist adding
   anything the current test doesn't require.
3. **Refactor**: now that it's green, clean it up if needed. Don't skip
   straight from red to a "final" implementation. One seam, one test, one
   minimal pass, repeat.

This is also just a good prompting pattern (see `docs/prompting.md`):
"here's a failing test, make it pass" is a much sharper instruction to an
agent than "write a function that adds two numbers."

## In this repo

`tests/test_calc.py` is grouped as one scenario with two cases:

```python
class TestAddScenarioCombiningTwoPrices:
    def test_case_typical_prices(self):
        assert add(2, 3) == 5

    def test_case_partial_refund(self):
        assert add(-2, 3) == 1
```

## Where the automation actually is, and where it isn't

CI (`.github/workflows/test.yml`) does two things, and it's worth being
precise about what each one catches:

1. **Reruns the suite on every push and pull request.** A red suite blocks
   the merge only when required checks are configured in branch protection
   or a ruleset. Configure those settings in each template copy. This catches
   regressions: something that used to work and now
   doesn't.
2. **Fails the PR if `src/` changed but nothing under `tests/` did.** This
   catches the specific case of a new feature or fix shipping with zero new
   tests.

Neither check reads the test and judges whether it's any good. A test that
asserts something trivially true, or that never exercises the actual bug,
will still pass check 2 as long as some line under `tests/` changed. The
implementation-coupled and tautological patterns above are exactly the
kind of "technically has a test" test that slips through. That part still
needs a human, or a code review, paying attention.
