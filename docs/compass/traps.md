---
type: trap
status: current
origin: ai-derived
verified: 2026-11-10
sources:
  - compass.config.json
  - package.json
---

# Traps

Non-obvious failure modes that have actually cost time on this project. Each one is here because something broke, not because it might. **Read the index before debugging anything that "should work".**

**The bar for an entry:** it took more than a few minutes to understand AND the cause was not visible from the symptom. General advice does not go here. Neither does anything a stack trace names. Each entry ends with what it cost, and names the test that now catches it, if one does.

## Index — read this, then only the entries you need

Scan the lines below, open the two or three that could be your symptom, skip the rest. **Word each line as the SYMPTOM, not the cause**, and copy the entry's heading exactly: the lint fails on an entry the index does not list.

- [GitHub Desktop commits fail with npx No such file or directory](#github-desktop-commits-fail-with-npx-no-such-file-or-directory)

---

---

### GitHub Desktop commits fail with npx No such file or directory

Committing in GitHub Desktop fails at the pre-commit hook with `/bin/bash: C:/nvm4w/nodejs/npx: No such file or directory`, preceded by a `wsl: Unknown key` warning. The same commit works from Git Bash. On Windows, `npx` and `npm` are bash scripts. GitHub Desktop's own Git has `sh` but no `bash`, so the script's `#!/usr/bin/env bash` starts WSL's `bash.exe` from System32, and WSL cannot see the Windows path. The error points at a missing file; the real cause is the wrong bash.

Fixed in Compass v0.3.1, whose hook runs `npx` and `npm` through `node`. This project pins it in `compass.config.json`. If it comes back, check that the pin is v0.3.1 or later and run `compass hook` again. Any other hook that calls `npm` or `npx` here would need the same treatment. Caught by *the hook runs npx through node in the Windows layout, and plain npx elsewhere* in the Compass repository's test suite. Cost: most of an afternoon, including one wrong fix (a WSL PATH fallback) that shipped before the cause was found.
