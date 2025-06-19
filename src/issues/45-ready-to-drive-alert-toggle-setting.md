---
title: "Ready to Drive Alert Toggle Setting"
date: "2025-06-16T00:00:00Z"
type: "enhancement"
priority: "high"
scope: ["safety", "infotainment"]
---

## Issue Description

The EX30's "Ready to Drive" alert currently only functions when Pilot Assist is active and the vehicle has automatically stopped behind another car. The system beeps and displays a message when the car ahead starts moving, but this feature is inconsistent across different driving modes.

The alert does not activate when the driver is stopped without Pilot Assist enabled or when using regular cruise control, creating an inconsistent user experience.

There is currently no setting to enable or disable this notification according to user preference.

## Negative Impact of Current Solution

The current implementation creates several usability and safety concerns:

1. **Inconsistent behavior**: The alert only works with Pilot Assist, not with regular cruise control or manual driving
2. **Missed opportunities**: Drivers may not notice when traffic starts moving if they're distracted (using phone, talking to passengers)
3. **Traffic flow disruption**: Delayed reactions to moving traffic can cause congestion and frustration for other drivers
4. **No user control**: Users cannot customize whether they want this notification or not
5. **Limited safety benefit**: The safety feature is only available in specific driving scenarios

## Proposed Solution

Implement a comprehensive Ready to Drive alert system with user control:

1. **Universal alert system**: Extend the "Ready to Drive" alert to work in all driving modes (manual, cruise control, and Pilot Assist)
2. **Toggle setting**: Add a setting in vehicle preferences to enable or disable the Ready to Drive notifications
3. **Consistent detection**: Monitor traffic movement regardless of the active driving assistance system
4. **Smart activation**: Trigger alerts when the vehicle has been stationary for a few seconds and traffic ahead begins moving

## Positive Impact of Proposed Solution

The proposed solution would deliver several benefits:

1. **Improved traffic flow**: Faster driver reactions to moving traffic reduce congestion and improve overall traffic efficiency
2. **Enhanced safety**: Reduces the risk of rear-end collisions from delayed reactions
3. **Better user experience**: Consistent behavior across all driving modes creates predictable system operation
4. **Customizable notifications**: Users can choose whether they want these alerts based on their driving preferences
5. **Reduced driver distraction**: Helps drivers who may be temporarily distracted return attention to driving
6. **Universal availability**: All drivers benefit from the feature regardless of which assistance systems they use
7. **Reduced road rage incidents**: Prevents honking and frustration from other drivers when the driver doesn't immediately notice traffic moving

## Negative Impact of Proposed Solution

Potential drawbacks include:

1. **False positives**: System might alert for minor movements that don't require immediate action
