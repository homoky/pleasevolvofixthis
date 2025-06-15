---
title: "Direct CarPlay Access from Home Button"
date: "2025-06-15T13:20:00Z"
---

## Issue Description

When CarPlay is connected, there is no way to instantly return to the CarPlay interface from anywhere in the system. CarPlay does not consistently appear in recent applications, and the Home button does not lead directly to CarPlay, even though it is the primary interface the user is utilizing.

## Negative Impact of Current Solution

- **CarPlay unavailable in recent apps**: CarPlay does not reliably appear among recent applications, forcing users to find alternative paths
- **Increased driver distraction**: Multiple clicks needed to get back to desired car interface
- **Ignoring user preferences**: System does not recognize that the user primarily uses CarPlay

## Proposed Solution

Implement a two-level system for the Home button and ensure constant CarPlay availability:

1. **CarPlay in recent applications**: If CarPlay is connected, it should unconditionally be displayed among recent applications
2. **Smart Home button**:
   - First Home press → direct transition to CarPlay (if connected)
   - Second Home press → default infotainment home screen

## Positive Impact of Proposed Solution

- **Respecting user preferences**: System recognizes primary CarPlay usage
- **Increased safety**: Faster access = less time spent interacting with screen
- **Better user experience**: Intuitive and predictable system behavior
- **Flexibility**: User still has access to native functions through second press

## Negative Impact of Proposed Solution

- **Potential confusion**: Some users might initially be confused by the changed Home button behavior
- **Potential conflict**: May interfere with other system functions tied to the Home button
