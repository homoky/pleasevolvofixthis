---
title: "Dynamic Driving Modes and Power Management Control"
date: "2025-06-15T13:00:00Z"
---

## Issue Description

The Volvo EX30 currently lacks distinct driving modes (eco, adaptive, normal, boost) and automatically reduces power output when the battery level drops below a certain percentage. This automatic power reduction occurs regardless of the driving situation or user preference, limiting the driver's control over vehicle performance.

**Real-world scenario**: When the battery drops below a certain percentage, the vehicle automatically reduces power and acceleration performance. However, if a driver knows they only have 15 kilometers remaining in their journey, they should have the choice to maintain full power rather than having the car make this decision autonomously.

## Negative Impact of Current Solution

- **Unpredictable performance**: Power reduction occurs without user consent, creating inconsistent driving experience
- **Safety concerns**: Reduced acceleration during critical overtaking maneuvers when expecting full power
- **Limited user control**: The system decides power management without considering user's specific needs or remaining journey distance
- **Driving anxiety**: Uncertainty about available power creates stress, especially when quick acceleration is needed
- **Inconsistent expectations**: Unlike combustion engines that maintain consistent power until fuel runs out

## Proposed Solution

Implement a comprehensive driving mode system with user-controlled power management:

**Driving Modes:**

- **Eco Mode**: Maximum efficiency, reduced power output
- **Adaptive Mode**: Intelligent power management based on driving conditions with battery-based power reduction (current state)
- **Normal Mode**: Balanced performance with zero battery-based power reduction
- **Boost Mode**: Maximum performance with zero battery-based power reduction

**Power Management Setting:**

- Add user toggle for "Dynamic Power Reduction" in vehicle settings
- When enabled: Gradual power reduction starts at 50% battery, more aggressive at 20% (current state)
- When disabled: Full power maintained until critical battery level (e.g., 10-15%)
- Default setting could remain enabled for range anxiety mitigation

## Positive Impact of Proposed Solution

- **Consistent driving experience**: Users know exactly what performance to expect based on their mode selection
- **Enhanced safety**: Predictable acceleration response during critical driving situations
- **User empowerment**: Drivers can choose their preferred balance between performance and range
- **Familiar experience**: Similar to traditional driving modes found in combustion vehicles
- **Flexible usage**: Users can disable power reduction when they know their remaining journey distance
- **Emergency capability**: Full power available when needed, even at lower battery levels
