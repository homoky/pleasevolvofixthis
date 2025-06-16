---
title: "Ambient Lighting Brightness Control State Inconsistency"
date: "2025-06-15T10:30:00Z"
---

## Issue Description

The ambient lighting brightness control in the settings menu has inconsistent behavior when adjusting brightness to the minimum value (0%). When the brightness slider is manually moved to the leftmost position (0%), the ambient lighting turns off but the system state doesn't change to "off". This creates unpredictable behavior when trying to use preset ambient lighting options or the off button afterwards.

![Ambient lighting brightness control issue](/issues/35-1.MOV)

## Negative Impact of Current Solution

- **Confusing user experience**: The lighting appears off but the interface doesn't reflect this state
- **Unpredictable behavior**: Selecting preset ambient lighting options may not work as expected
- **Inconsistent controls**: The "off" button doesn't function properly when brightness was set to 0% manually
- **Loss of user confidence**: Users become uncertain about the actual state of their ambient lighting system

## Proposed Solution

When the brightness slider is moved to 0% (fully left), the system should:

1. Automatically close the brightness adjustment popup/slider
2. Change the ambient lighting state to "off" in the interface
3. When a preset ambient lighting option is selected, automatically set a default brightness level (e.g., 20%) and change state from "off" to "on"
4. Ensure the "off" button works consistently regardless of how the lighting was previously turned off
5. When selecting any preset ambient lighting scene, always set state to "on" regardless of current state, and ensure brightness is never 0% (minimum should be a reasonable default like 20%)

## Positive Impact of Proposed Solution

- **Consistent user experience**: The interface state always matches the actual lighting behavior
- **Predictable controls**: All ambient lighting controls work as expected in any scenario
- **Improved usability**: Users can confidently control their ambient lighting without worrying about hidden states
- **Better integration**: Seamless switching between manual brightness control and preset options
