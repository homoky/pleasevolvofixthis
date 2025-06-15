---
title: "Git Commit Task"
read_only: true
type: "command"
---

# Create new git commit task

- Takes all staged changes, suggests a commit message, ALWAYS asks for confirmation, and creates the commit ONLY after explicit approval
- Always provide at least 5 message options in a numbered list; I will choose one or request a different option
- When suggesting commit messages, use `git log -n 20 --oneline` to review the most recent commit messages for inspiration on format and style
- If there are no staged changes, abort the process with a message in red text: "No changes staged for commit. Aborting."
- NEVER ask about staging files - assume all files I want to commit are already staged
- NEVER use git add commands - you are forbidden from staging files yourself
- Format the suggested commit messages in orange text to make them more readable in the terminal
- NEVER proceed with `git commit -m` without explicit confirmation from me first
- Only after I explicitly confirm or modify the commit message, proceed with `git commit -m "message"`
- If I tell you that you can push the changes, you can run `git push` directly without asking for permission
- Do NOT add Claude co-authorship footer to commits
- Read ONLY staged files
- There are two scopes for issues:
  - [issues] - for issue related stuff (updated content of md files, updated files used in issue md files)
  - [code] - for non related issue stuff

## Examples of Good Commit Messages

- `[code] updated component AboutMe`
- `[issues] updated issue #2 How to connect mobile device via Bluetooth`
- `[issues] new issue #2 How to connect mobile device via Bluetooth`

## Precommit Checks

- Precommit checks run before the main commit action
- Only run precommit checks that meet their triggering conditions
- For all changed md files check english grammar and recommend fixes
- If any issues found in precommit checks, do not continue, until resolved
