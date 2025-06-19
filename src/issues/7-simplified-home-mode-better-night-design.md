---
title: "Simplified Home Mode - Better Night Design"
date: "2025-06-15T13:20:00Z"
type: "design"
priority: "low"
scope: ["infotainment", "ux"]
---

## Issue Description

When long-pressing the home button, the system enters a simplified environment with black background featuring a gradient and a mini music player. While this mode is designed for minimal distraction, the current implementation includes unnecessary visual elements that can be disruptive during night driving.

![Simplified Home Mode Current State](/issues/7-1.jpeg)

## Negative Impact of Current Solution

- **Distracting Gradient**: The background gradient is completely unnecessary and visually disruptive during night driving
- **Grey Background on Mini Player**: The grey background on the mini music player creates unwanted light emission in dark environments
- **Inconsistent Dark Mode**: The mode doesn't fully commit to minimal light output despite being designed for reduced distraction

## Proposed Solution

Improve the simplified home mode's night-driving suitability by:

1. **Remove Background Gradient**: Eliminate the gradient completely and use pure black background instead
2. **Redesign Mini Player**:
   - Remove the grey background from the mini music player
   - Use either a subtle light grey border for definition, or remove the background completely

The goal is to create a truly minimal interface that emits the least amount of light possible when users intentionally choose this mode.

## Positive Impact of Proposed Solution

- **Better Night Driving Experience**: Reduced light emission creates less visual distraction and maintains night vision
- **True Minimal Design**: Achieves the intended purpose of the simplified mode more effectively
- **Improved User Choice**: Users who select this mode get the minimal distraction experience they're seeking
- **Enhanced Safety**: Less screen brightness and visual elements reduce driver distraction
