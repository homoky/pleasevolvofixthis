---
title: "Dynamic Steering Assistance Speed-Based Adjustment"
date: "2025-06-16T13:20:00Z"
type: "enhancement"
priority: "low"
scope: ["drivetrain", "ux"]
---

## Issue Description

The steering wheel assistance currently offers three fixed settings (gentle, normal, firm), but lacks the ability to dynamically adjust based on driving conditions. This creates a compromise where drivers must choose between comfort at high speeds or precision at low speeds.

## Negative Impact of Current Solution

The fixed steering assistance settings force drivers to:

- Accept less precise steering during parking and low-speed maneuvering when using comfortable highway settings
- Or accept overly firm steering at highway speeds when optimized for parking precision
- Manually adjust settings frequently based on driving conditions, which is distracting and unsafe

## Proposed Solution

Add a **"Dynamic"** toggle option beneath the existing three steering settings (gentle, normal, firm) that when enabled, automatically adjusts the selected assistance level based on vehicle speed:

- At speeds below 30 km/h: Automatically reduce steering effort (make steering lighter) regardless of the chosen mode for better vehicle manipulation during parking and maneuvering
- At speeds above 30 km/h: Automatically switch to the user's selected setting and smoothly firm up the steering
- Smooth transitions between assistance levels to avoid abrupt changes in steering feel
- Default setting: OFF (disabled by default) to avoid confusing new drivers or guests

## Positive Impact of Proposed Solution

This dynamic system would provide:

- Optimal steering feel for all driving conditions without manual intervention
- Enhanced parking and low-speed maneuvering comfort
- Better highway driving precision and road feedback
- Reduced driver distraction from manual setting adjustments
- Improved overall driving experience through intelligent adaptation
