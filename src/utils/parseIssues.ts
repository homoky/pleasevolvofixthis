import fs from "fs";
import path from "path";
import { parse } from "zod-matter";
import { z } from "zod";

const issuesDirectory = path.join(process.cwd(), "src", "issues");

const issueTypeEnum = z.enum(["bug", "feature", "enhancement", "design"]);
const issuePriorityEnum = z.enum(["critical", "high", "medium", "low"]);
const issueScopeEnum = z.enum([
  "infotainment",
  "safety", 
  "drivetrain",
  "climate",
  "mobile-app",
  "connectivity", 
  "interior",
  "ux"
]);

const issueSchema = z.object({
  title: z.string(),
  date: z.string().datetime(),
  type: issueTypeEnum,
  priority: issuePriorityEnum,
  scope: z.array(issueScopeEnum),
});

export type IssueType = z.infer<typeof issueTypeEnum>;
export type IssuePriority = z.infer<typeof issuePriorityEnum>;
export type IssueScope = z.infer<typeof issueScopeEnum>;

export function getIssues() {
  const fileNames = fs.readdirSync(issuesDirectory);

  return fileNames
    .sort((a, b) => {
      const numA = parseInt(a.split("-")[0]);
      const numB = parseInt(b.split("-")[0]);
      return numB - numA;
    })
    .map((fileName) => getIssue({ fileName }));
}

export const getIssue = (args: { fileName: string }) => {
  const fullPath = path.join(issuesDirectory, args.fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = parse(fileContents, issueSchema);

  return {
    ...data,
    content,
    fileName: args.fileName,
  };
};
