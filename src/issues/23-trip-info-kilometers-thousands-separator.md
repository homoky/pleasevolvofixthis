---
title: "Trip Info Display - Kilometers Should Be Separated by Thousands"
date: "2025-06-15T10:30:00Z"
---

## Issue Description

In the trip information display (Current trip info since last reset), the kilometer values are displayed without proper thousands separators, making large numbers difficult to read at a glance while driving.

![Current trip info display showing unseparated kilometers](/issues/23-1.jpeg)

## Current Behavior

- Trip distances are displayed as continuous numbers (e.g., "12345 km")
- Large numbers are hard to read quickly
- No visual separation for thousands

## Suggested Improvement

- Add thousands separators to kilometer values (e.g., "12,345 km" or "12 345 km" depending on locale)
- Apply consistent formatting across all trip information displays
- Consider regional preferences for separator style (comma vs. space)
