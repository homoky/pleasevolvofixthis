# Issue Template

## Issue Information

- **Issue Number**: [Sequential number - check existing issues]
- **Title**: [Descriptive title of the infotainment issue]
- **Date Reported**: [YYYY-MM-DD format]

## File Naming Convention

Save as: `/src/issues/{number}-{kebab-case-title}.md`

Example: `/src/issues/2-bluetooth-connection-drops.md`

## Notes

- Use markdown formatting for better readability
- Include screenshots if possible (place in `/public/` folder)
- Keep descriptions clear and concise
- Focus on specific, actionable issues
- Everything has to be written in english
- Never start content with h1 (#)
- To include images, use format: `![Alt text](/issues/image-name.jpeg)`
- Available tags are defined in `/src/utils/parseIssues.ts`

## Frontmatter Template

```yaml
---
title: "Issue title here"
date: "{current date in format 2024-12-15T13:20:00Z}"
type: "{typeTags}"
priority: "{priorityTags}"
scope: ["{multipleScopeTags}"]
---
```

## Issue Description

[Clear description of the current infotainment issue or problem area]

## Negative Impact of Current Solution

[How the current implementation negatively affects user experience, safety, or functionality]

## Proposed Solution

[Detailed suggestion for how Volvo could improve or fix this issue]

## Positive Impact of Proposed Solution

[Benefits and improvements that would result from implementing the proposed solution]

## Negative Impact of Proposed Solution

[Drawbacks or potential negative consequences that could result from implementing the proposed solution]
