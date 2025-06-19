---
title: "Inconsistent Notification System with Multiple Visual Styles"
date: "2025-06-19T14:30:00Z"
type: "design"
priority: "medium"
scope: ["infotainment", "ux"]
---

## Issue Description

The Volvo EX30 infotainment system uses three completely different notification styles at different screen locations, creating an inconsistent and unprofessional user experience. The system displays similar types of information using three distinct visual designs:

**Type 1** (Upper right area near speedometer): Driver attention alerts, braking assist information, washer fluid warnings - some are dismissible but re-appear during driving, others cannot be dismissed

![Type 1 Notifications](/issues/49-1.jpeg)

**Type 2** (Navigation area): Navigation announcements, CarPlay connection notifications - unnecessarily large and prominent

![Type 2 Notifications](/issues/49-2.JPG)

**Type 3** (System popups): "Remove key" warnings when charging phone, system messages - cannot be dismissed and freeze the entire touchscreen interface, preventing any infotainment interaction

Additionally, audio accompaniment is inconsistent - some notifications include sound while others are silent, making it unpredictable for drivers to know when important alerts are being displayed.

![Type 3 Notifications](/issues/49-3.jpeg)

## Negative Impact of Current Solution

- **Unprofessional Appearance**: Three different notification styles make the interface look amateurish and poorly designed
- **Inconsistent Dismissal Behavior**: Type 1 can be dismissed but reappears, Type 2 auto-dismisses, Type 3 cannot be dismissed at all
- **User Confusion**: Drivers must remember three different interaction patterns for similar notification types
- **Visual Clutter**: Different sizes, positions, and completely different visual styles create unnecessary visual noise and distraction
- **Unpredictable Audio**: Inconsistent sound accompaniment makes it unclear when important alerts are active
- **Reduced Trust**: Inconsistent design reduces confidence in the system's reliability and attention to detail
- **Cognitive Load**: Multiple notification systems require mental effort to process and understand

## Proposed Solution

Implement a unified notification system with consistent visual design and behavior:

- **Single Visual Style**: Standardize all notifications to use one consistent design language, size, and positioning
- **Consistent Dismissal Logic**: All dismissible notifications should follow the same interaction pattern and timing rules
- **Unified Location**: Consider consolidating notifications to a single, predictable screen area when possible
- **Standardized Audio**: Establish consistent audio rules - critical safety alerts always have sound, informational messages follow user preference settings
- **Hierarchy System**: Implement clear visual hierarchy (critical, warning, info) with consistent styling for each level
- **Optional Setting**: Allow users to customize notification behavior and audio preferences in vehicle settings

## Positive Impact of Proposed Solution

- **Professional Interface**: Unified design creates a more polished, premium user experience that doesn't look amateurish
- **Improved Usability**: Consistent interaction patterns reduce learning curve and user confusion
- **Better Focus**: Standardized positioning and sizing reduce visual distraction while driving
- **Enhanced Safety**: Predictable audio cues help drivers respond appropriately to different alert types
- **Increased Trust**: Consistent design language improves perceived system reliability
- **Reduced Cognitive Load**: Single notification system eliminates mental effort needed to process different styles
- **Brand Consistency**: Unified approach aligns with Volvo's reputation for thoughtful, safety-focused design
