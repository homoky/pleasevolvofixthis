---
title: "Persistent AWD Mode Without Performance Behavior"
date: "2025-10-26T00:00:00Z"
type: "feature"
priority: "high"
scope: ["drivetrain", "infotainment"]
systemVersion: "1.7.1"
---

## Issue Description

After the recent update, the EX30 offers three driving modes: Range, Normal, and Performance. Only the Performance mode keeps both motors (AWD/4x4) permanently engaged, ensuring true all-wheel drive with both front and rear axles constantly powered.

However, Performance mode automatically enables creep mode (the vehicle doesn't fully stop when releasing the brake pedal and moves forward without accelerator input) and features much more aggressive throttle response. Drivers who want permanent all-wheel drive for safety in adverse weather conditions (rain, snow, slippery roads) don't necessarily want the aggressive behavior and mandatory creep mode that comes with Performance mode.

Currently, there's no option to have persistent AWD without these unwanted side effects. The Performance mode doesn't solve the use case where a driver simply wants to maximize road safety through continuous AWD engagement.

## Negative Impact of Current Solution

The current implementation forces unwanted compromises on drivers:

1. **Constant mode switching**: In adverse weather, drivers must repeatedly switch to Performance mode for AWD, then back when conditions improve
2. **Forced creep mode**: Performance mode automatically enables creep mode that cannot be disabled, changing fundamental vehicle behavior
3. **Unnecessarily aggressive behavior**: Vehicle becomes overly responsive when the driver only wants enhanced traction and safety
4. **Safety vs. comfort dilemma**: Drivers must choose between safety (AWD in Performance mode) and driving comfort (normal throttle response and no creep mode)
5. **Driver frustration**: The inability to separate safety features (AWD) from performance characteristics (throttle mapping, creep mode) creates unnecessary inconvenience
6. **Suboptimal for weather conditions**: Drivers who don't care about range or consumption but prioritize safety have no appropriate mode selection

## Proposed Solution

Implement one of three possible approaches to provide persistent AWD without Performance mode's aggressive characteristics:

### Option 1: New Driving Mode

Create an additional driving mode (e.g., "Normal AWD" or "All-Weather") that:

- Keeps both motors permanently engaged for continuous AWD
- Maintains Normal mode's comfortable throttle response
- Allows independent creep mode toggling
- Optimizes for safety rather than performance

### Option 2: Persistent AWD Setting

Add a configuration option in the "Drive" settings section in Car settings page:

- Toggle for "Persistent Four-Wheel Drive"
- Works independently of driving mode selection
- When enabled, keeps both motors engaged regardless of selected mode (Range, Normal, or Performance)
- Preserves the selected mode's other characteristics (throttle response, creep mode settings)

### Option 3: Custom Driving Mode (Most Flexible)

Enable a fully customizable driving mode saved to the driver profile:

- **Creep mode**: Toggle on/off independently
- **One-pedal drive intensity**: Adjustable regenerative braking strength
- **AWD engagement**: Toggle persistent four-wheel drive on/off
- **Throttle map**: Select between Range, Normal, or Performance throttle response characteristics
- **Steering stiffness**: Adjustable steering wheel force/resistance level
- **Profile storage**: Save custom configuration to individual driver profiles
- **Quick access**: Select custom mode alongside existing Range/Normal/Performance modes

This approach would provide the ultimate flexibility, allowing each driver to create their ideal driving mode configuration that matches their specific preferences and needs, whether prioritizing safety, efficiency, comfort, or any combination thereof.

## Positive Impact of Proposed Solution

The proposed solution would deliver significant benefits:

1. **Enhanced safety without compromise**: Drivers can maintain AWD engagement in adverse weather without accepting aggressive driving behavior
2. **Reduced driver workload**: No need to constantly switch between driving modes based on weather conditions
3. **Driver confidence**: Assurance that AWD is always engaged when prioritizing safety
4. **Better feature separation**: Decouples safety features (AWD engagement) from performance characteristics (throttle response, creep mode)
5. **Flexible configuration**: Matches individual driver preferences and priorities (especially with Option 3's custom mode)
6. **Improved user experience**: Drivers feel in control of their safety preferences without unwanted side effects
7. **All-weather versatility**: Particularly valuable for drivers in regions with frequently changing weather conditions
8. **Ultimate personalization** (Option 3): Each driver can create their perfect driving mode by combining desired characteristics from different modes
9. **Profile integration** (Option 3): Custom settings automatically load when driver switches profiles, ensuring consistent personal experience

## Negative Impact of Proposed Solution

Potential drawbacks to consider:

1. **Increased energy consumption**: Permanent AWD uses more energy than on-demand engagement in Normal mode, reducing overall range
2. **Menu complexity**: Adding another mode or setting increases the number of configuration options (especially with Option 3)
3. **User education needed**: Drivers need to understand when to use persistent AWD vs. on-demand engagement
4. **Potential confusion**: Less experienced users might not understand the difference between Performance mode AWD and persistent AWD setting
5. **Configuration complexity** (Option 3): Too many customization options might overwhelm some users, though default modes would remain available
