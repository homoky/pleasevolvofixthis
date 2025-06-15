---
title: "Rain Sensitivity Popup - Inconsistent Border Radius Design"
date: "2025-01-15T16:00:00Z"
---

## Issue Description

The rain sensitivity popup dialog displays a visually inconsistent border radius design that appears unprofessional. The inner buttons have rounded corners that are not properly harmonized with the outer container's border radius, creating an amateurish appearance that undermines the premium brand perception.

![Rain sensitivity popup with inconsistent border radius](/issues/28-1.JPG)

## Negative Impact of Current Solution

- **Unprofessional appearance**: The inconsistent border radius makes the interface look hastily designed and amateurish
- **Brand perception damage**: Visual inconsistencies reflect poorly on Volvo's attention to detail and premium positioning
- **Design system inconsistency**: Breaks established visual hierarchy and design principles
- **User experience degradation**: Poorly designed interface elements create subtle but persistent negative impressions
- **Competitive disadvantage**: Modern automotive interfaces require polished design details to meet user expectations

## Proposed Solution

Implement consistent border radius design following the established design principles used by premium brands like Apple.

### Design System Approach

- **Outer container**: Use primary border radius (e.g., 12px)
- **Inner buttons**: Use nested border radius calculated as: `outer_radius - padding` (e.g., 8px if padding is 4px)
- **Visual hierarchy**: Ensure inner elements respect the outer container's boundaries
- **Consistency**: Apply the same border radius rules across all popup dialogs and similar UI components

### External Links

- **UI Design Best Practices**: [Border radius design principles](https://www.youtube.com/shorts/RcZsC56eGUc)

## Positive Impact of Proposed Solution

- **Enhanced premium perception**: Consistent design details reinforce Volvo's luxury positioning
- **Improved brand perception**: Demonstrates attention to detail and quality craftsmanship
- **Professional appearance**: Creates a polished, intentional interface that feels thoughtfully designed
- **Design system consistency**: Establishes reusable patterns for future UI development
- **User confidence**: Well-designed interfaces increase user trust in the overall system quality
- **Competitive advantage**: Refined visual details differentiate Volvo from competitors with less polished interfaces
