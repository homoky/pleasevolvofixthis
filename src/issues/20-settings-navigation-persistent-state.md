---
title: "Settings Navigation - Persistent State Navigation"
date: "2025-06-15T14:30:00Z"
type: "bug"
priority: "low"
scope: ["infotainment", "ux"]
---

## Issue Description

When navigating through settings menus (e.g., Car Settings), after drilling down into sub-pages or switching to navigation and then pressing the settings button again, the system returns to the home screen instead of returning to the main page of the originally selected settings section.

![Settings navigation issue demonstration](/issues/20-1.MOV)

## Negative Impact of Current Solution

- **Inefficient navigation**: Users must repeatedly navigate through multiple menu levels to return to their desired settings section
- **Interrupted workflow**: When temporarily switching to navigation or other functions, users lose their position in the settings hierarchy

## Proposed Solution

Implement persistent state navigation for settings sections:

- When a user initially selects a settings category (e.g., Car Settings), the system should remember this as the "root" for that session
- Subsequent presses of the settings button should return to the main page of the originally selected settings section, not the global home screen
- Only after a significant period of inactivity or explicit navigation away should the system reset to the main settings menu or after pressing home button

## Positive Impact of Proposed Solution

- **Improved efficiency**: Users can quickly return to their working settings section without repetitive navigation
- **Better workflow continuity**: Temporary switches to navigation or other functions won't disrupt the settings workflow
- **Enhanced user experience**: Navigation behavior becomes more predictable and intuitive
- **Reduced driver distraction**: Fewer touches and less time spent navigating menus while driving
- **Consistent with user expectations**: Matches common UI patterns found in other modern interfaces
