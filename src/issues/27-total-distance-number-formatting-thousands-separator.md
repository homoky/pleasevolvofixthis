---
title: "Total Distance Number Formatting - Missing Thousands Separator"
date: "2025-01-15T15:30:00Z"
---

## Issue Description

In the Car Status section, the "Total Distance" value is displayed without any thousands separator, making large numbers difficult to read quickly. For example, a value like "25847" km is displayed as a continuous string of digits without formatting.

![Total Distance without thousands separator](/issues/27-1.JPG)

## Negative Impact of Current Solution

- **Poor readability**: Large distance numbers are hard to parse at a glance while driving
- **Unprofessional appearance**: The system looks untrustworthy and amateurish without proper number formatting
- **Cognitive load**: Drivers need extra mental effort to interpret the exact mileage value
- **Inconsistent formatting**: Many other automotive interfaces use proper number formatting for better UX
- **Safety concern**: Taking extra time to read unformatted numbers while driving diverts attention from the road

## Proposed Solution

Add thousands separators to the Total Distance display in the Car Status section. Use appropriate locale-based formatting:

- For European markets: "25 847" km (space separator)
- For US markets: "25,847" mi (comma separator)
- Automatically adapt based on the vehicle's regional settings

## Positive Impact of Proposed Solution

- **Improved readability**: Numbers become instantly recognizable and easier to read
- **Faster information processing**: Drivers can quickly understand mileage without counting digits
- **Better user experience**: Consistent with modern digital interface standards
- **Enhanced professionalism**: Makes the interface feel more polished and attention to detail
