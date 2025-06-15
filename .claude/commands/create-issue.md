# Create Issue Command

## Description
Creates a new Volvo EX30 infotainment issue following the project template and structure.

## Instructions
1. **Ask the user what infotainment issue they want to report**
   - Get a clear description of the problem
   - Ask for specifics about the negative impact
   - Ask for their proposed solution
   - Ask about the positive impact of their solution

2. **Review existing issues**
   - Read the ISSUE_TEMPLATE.md to understand the structure
   - Check the last 3 issues in `/src/issues/` to understand numbering and format
   - Determine the next sequential issue number

3. **Create the new issue file**
   - Follow naming convention: `/src/issues/{number}-{kebab-case-title}.md`
   - Use proper frontmatter with title and date (YYYY-MM-DD format)
   - Structure content according to template:
     - Issue Description
     - Negative Impact of Current Solution
     - Proposed Solution
     - Positive Impact of Proposed Solution

4. **Validate the creation**
   - Ensure the file follows the template structure
   - Check that the issue number is sequential
   - Verify the frontmatter is properly formatted

## Example Usage
User: "I want to report an issue with the bluetooth connection"
Assistant: [Asks follow-up questions, reviews template, creates numbered issue file]