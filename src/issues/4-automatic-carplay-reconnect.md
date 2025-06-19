---
title: "Automatic CarPlay Reconnection When Phone is Connected"
date: "2025-06-15T13:20:00Z"
type: "bug"
priority: "high"
scope: ["infotainment", "connectivity"]
---

## Issue Description

When unlocking the car, the phone automatically connects via Bluetooth, but CarPlay does not activate automatically every time.

Users must manually navigate to Settings → Connectivity → select the connected phone, wait approximately 2 seconds for the CarPlay banner to appear, and then manually activate CarPlay in the phone details section.

## Negative Impact of Current Solution

- **Annoying Experience**: The manual activation process is primarily frustrating and annoying for users
- **Degraded User Experience**: Significantly worsens the overall user experience with the infotainment system
- **Safety Risk**: Requires multiple navigation steps through menus while potentially driving
- **User Frustration**: Manual process every time the car is started when CarPlay should be seamless
- **Inconsistent Experience**: CarPlay availability is unpredictable, making it unreliable for regular use

## Proposed Solution

Implement automatic CarPlay activation when a previously paired phone with CarPlay enabled is detected and connected via Bluetooth.

The system should:

1. Detect when a CarPlay-enabled phone connects via Bluetooth
2. Automatically attempt to establish CarPlay connection
3. Activate CarPlay interface without user intervention
4. Provide a brief notification confirming CarPlay is active

## Positive Impact of Proposed Solution

- **Improved Safety**: Eliminates need for manual menu navigation while driving
- **Seamless Experience**: CarPlay becomes truly "plug and play" without manual activation
- **Time Savings**: Immediate CarPlay availability upon entering the vehicle
- **Enhanced Usability**: Consistent and predictable behavior builds user confidence
- **Reduced Distraction**: Automatic connection allows focus on driving preparation
