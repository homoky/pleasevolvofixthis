---
title: "Default Driving Mode Setting"
date: "2025-10-26T01:00:00Z"
type: "feature"
priority: "high"
scope: ["drivetrain", "infotainment", "safety"]
---

## Issue Description

The EX30 does not remember the driver's preferred driving mode (Range, Normal, or Performance) between vehicle startups. Every time the vehicle is started, it defaults to a preset mode regardless of the driver's preference or previously selected mode.

This means drivers who prefer a specific driving mode (such as Performance for AWD safety, or Range for efficiency) must manually change the driving mode after every startup. Different drivers have different preferences - some want Range mode for maximum efficiency, others want Performance mode for safety reasons - but the vehicle does not accommodate these individual preferences.

When drivers forget to set their preferred mode immediately after startup and before driving, they are forced to change the driving mode while driving, which requires navigating through the infotainment system and increases distraction, inattention risk, and potential for accidents.

## Negative Impact of Current Solution

The current implementation creates several issues:

1. **Repetitive manual adjustment**: Drivers must manually select their preferred driving mode after every vehicle startup
2. **Safety risk during driving**: When forgotten at startup, drivers must change modes while driving, increasing distraction and accident risk
3. **Inconsistent driving experience**: Vehicle behavior doesn't match driver expectations until mode is manually changed
4. **User frustration**: Annoying and unnecessary extra step that should be automated
5. **Wasted time**: Adds an unnecessary task to every driving session
6. **Lack of personalization**: Vehicle doesn't respect individual driver preferences despite having driver profiles
7. **Critical safety scenarios**: Drivers who need AWD (Performance mode) for safety may forget to enable it, creating dangerous situations in adverse weather

## Proposed Solution

Add a default driving mode setting in the "Drive" section of the Car settings page:

- **Default Driving Mode selector**: Dropdown or radio buttons to choose preferred startup mode (Range, Normal, or Performance)
- **Persistent storage**: Save the preference to the vehicle settings
- **Automatic application**: Apply the selected default mode automatically at every vehicle startup
- **Profile integration**: Store different default modes for different driver profiles
- **Easy access**: Located in Settings > Drive section for intuitive discovery

This would allow each driver to set their preferred driving mode once, and the vehicle would automatically start in that mode every time.

## Positive Impact of Proposed Solution

The proposed solution would deliver significant benefits:

1. **Enhanced safety**: Eliminates the need to adjust driving mode while driving, reducing distraction and accident risk
2. **Time savings**: Removes repetitive manual adjustment from every driving session
3. **Consistent experience**: Vehicle always starts with the driver's preferred characteristics
4. **Improved personalization**: Respects individual driver preferences and driving priorities
5. **Reduced frustration**: Eliminates an annoying and unnecessary manual task
6. **Better for critical scenarios**: Drivers who need specific modes for safety (AWD in Performance) can ensure it's always enabled
7. **User confidence**: Drivers can trust the vehicle will behave as expected from the moment they start driving
8. **Professional experience**: Aligns with user expectations from modern vehicles that remember preferences

## Negative Impact of Proposed Solution

Potential drawbacks to consider:

1. **Minimal development effort**: Requires engineering time to implement the setting and persistence logic, though this should be relatively straightforward
2. **None for existing users**: Since the default setting would remain "Normal" (current behavior), users who don't want to customize anything are completely unaffected
