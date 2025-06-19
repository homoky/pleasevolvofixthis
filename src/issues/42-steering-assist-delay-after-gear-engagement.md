---
title: "Steering Assist Delay After Gear Engagement"
date: "2025-06-16T13:35:00Z"
type: "bug"
priority: "critical"
scope: ["safety", "drivetrain"]
---

## Issue Description

When engaging drive or reverse gear, there is a 1-2 second delay before the power steering assistance becomes available. During this delay, the steering wheel remains heavy and difficult to turn, while the acceleration pedal is already responsive and the vehicle can begin moving immediately.

## Negative Impact of Current Solution

This delay creates a dangerous safety situation where:

- The vehicle can accelerate immediately upon gear engagement, but steering control is compromised
- Drivers cannot quickly maneuver around obstacles or make emergency steering corrections during the first 1-2 seconds of movement
- The expectation is that when "Drive" is engaged, the entire vehicle system is ready for operation
- Risk of collision when immediate steering input is needed after gear engagement
- Driver confusion and loss of confidence in vehicle responsiveness

The disconnect between available acceleration and steering assistance creates an unsafe driving condition.

## Proposed Solution

Implement one of two safety-focused solutions:

**Option 1 (Preferred):** Synchronize steering assistance activation with gear engagement

- Power steering assistance should become available immediately when gear is engaged
- No delay between gear selection and full vehicle control availability

**Option 2 (Alternative):** Delay acceleration availability until steering is ready

- Disable or limit acceleration pedal responsiveness until power steering assistance is fully active
- Ensure all vehicle control systems are synchronized before allowing movement

Both solutions ensure that acceleration and steering capabilities are available simultaneously.

## Positive Impact of Proposed Solution

Implementing synchronized control availability would:

- Eliminate the critical safety risk of having acceleration without proper steering control
- Provide drivers with immediate confidence that the vehicle is fully ready when gear is engaged
- Reduce collision risk during emergency maneuvers in the first seconds after gear engagement
- Create consistent and predictable vehicle behavior that matches driver expectations
- Improve overall vehicle safety and driver trust in the system
