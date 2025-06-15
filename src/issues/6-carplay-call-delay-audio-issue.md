---
title: "CarPlay Call Delay - Audio Issue During Incoming Calls"
date: "2025-06-15T13:20:00Z"
---

## Issue Description

When receiving incoming calls with CarPlay connected, there is approximately a 2-second audio delay where neither party can hear each other. The call timer on the display starts counting from 0-2 seconds, but no audio is transmitted or received during this initial period.

## Negative Impact of Current Solution

- **Safety Risk**: Driver may need to repeat themselves or ask the caller to repeat, causing distraction during driving
- **Professional Impact**: Business calls appear unprofessional when there's a delay in responding
- **User Frustration**: Creates anxiety about whether the call connected properly

## Proposed Solution

Eliminate the audio delay by applying the same audio processing used for outgoing calls to incoming calls. Since outgoing calls work without any delay, the system should use the same audio initialization and handoff process for incoming calls to ensure immediate audio connection.

## Positive Impact of Proposed Solution

- **Seamless Communication**: Immediate audio connection creates natural conversation flow
- **Enhanced Safety**: Reduces driver distraction by eliminating the need to repeat or clarify
- **Improved User Confidence**: Users can trust that calls will connect properly every time
