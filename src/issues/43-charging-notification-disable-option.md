---
title: "Charging Notification Disable Option"
date: "2025-01-16T00:00:00Z"
---

## Issue Description

The infotainment system displays a persistent charging notification "Charging your devices. Remove key card and other objects." whenever any device is placed on the wireless charging pad.

This notification appears regardless of whether the vehicle is in parking mode or driving, and regardless of who is charging the device (driver or passenger).

Most critically, the notification appears even when there is no physical key card in the vehicle, making it completely irrelevant for users who exclusively use the digital key.

![Charging notification example](/issues/42-1.jpeg)

## Negative Impact of Current Solution

The current implementation creates multiple usability issues:

1. **Irrelevant warnings**: The notification appears even when no physical key card is present, making it meaningless for digital key users
2. **Interrupts user interaction**: The notification blocks interaction with the infotainment system and cannot be dismissed by tapping on it or the display
3. **Forced waiting**: Users must wait for the notification to disappear automatically, with no way to speed up the process
4. **Frequent interruptions**: The notification appears every time someone charges a device, whether driver or passenger
5. **Obstructs important functions**: The notification can interfere with accessing critical driving information or controls

## Proposed Solution

Implement a settings option to disable charging notifications, with the following features:

1. **"Don't show again" option**: Add an "I understand, don't show again" button directly on the notification, with a settings option to reset all dismissed warnings
2. **Smart detection**: Only show the notification when an actual key card is detected in the vehicle
3. **Dismissible notifications**: Allow users to tap to dismiss the notification immediately

## Positive Impact of Proposed Solution

The proposed solution would deliver several benefits:

1. **Reduced distractions**: Eliminates unnecessary interruptions while driving or using the infotainment system
2. **Improved usability**: Users can interact with the system without forced delays
3. **Personalized experience**: Digital key users wouldn't receive irrelevant warnings about physical key cards
4. **Better passenger experience**: Passengers can charge devices without disrupting the driver's interaction with the system
5. **Enhanced safety**: Fewer unnecessary notifications mean less distraction from driving
