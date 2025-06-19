---
title: "Cruise Control Disables Above 150 km/h During Overtaking"
date: "2025-06-15T15:30:00Z"
type: "bug"
priority: "critical"
scope: ["safety", "drivetrain"]
---

## Issue Description

The cruise control system automatically disables when the vehicle exceeds 150 km/h, even during brief overtaking maneuvers. This behavior is inconsistent with lower speed settings (110 km/h, 130 km/h) where the system maintains engagement and gradually reduces speed when the accelerator is released, while continuing to maintain distance from vehicles ahead.

## Negative Impact of Current Solution

- **Driver confusion**: Unexpected cruise control deactivation during overtaking disrupts the driving experience
- **Inconsistent behavior**: The system behaves differently at speeds above 150 km/h compared to lower speed settings
- **Safety concerns**: Loss of adaptive cruise control during high-speed overtaking removes distance management assistance
- **Reduced driver confidence**: Unpredictable system behavior makes drivers hesitant to rely on cruise control
- **Manual re-engagement required**: Driver must manually reactivate cruise control after each overtaking maneuver

## Proposed Solution

Maintain cruise control engagement above 150 km/h with consistent behavior:

- Keep cruise control active when briefly exceeding 150 km/h during overtaking
- When the driver releases the accelerator, gradually reduce speed without braking to the set cruise speed
- Continue maintaining distance from vehicles ahead using the adaptive cruise control system
- Apply the same speed management logic used for lower speed settings (110 km/h, 130 km/h) to speeds above 150 km/h

## Positive Impact of Proposed Solution

- **Consistent system behavior**: Uniform cruise control response across all speed ranges
- **Improved overtaking safety**: Maintains distance management during high-speed maneuvers
- **Enhanced driver confidence**: Predictable system behavior increases trust in cruise control
- **Smoother driving experience**: No interruption of cruise control during temporary speed increases
- **Reduced driver workload**: Eliminates need to constantly reactivate cruise control after overtaking

## Negative Impact of Proposed Solution

- **Increased system complexity**: Requires more sophisticated speed management algorithms at higher speeds
