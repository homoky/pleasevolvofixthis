import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { DateTime } from "luxon";
import { pageview } from "@vercel/analytics";
import { twMerge } from "tailwind-merge";
import { match } from "ts-pattern";
import { Tag } from "./Tag";
import { IssueType, IssuePriority, IssueScope } from "@/utils/parseIssues";

interface IssueProps {
  title: string;
  content: string;
  number: number;
  date: string;
  type: IssueType;
  priority: IssuePriority;
  scope: IssueScope[];
  isStatic?: boolean;
}

export const Issue = ({
  title,
  number,
  content,
  date,
  type,
  priority,
  scope,
  isStatic,
}: IssueProps) => {
  const [isOpen, setIsOpen] = useState(isStatic);

  // Tag label mappings
  const typeLabels: Record<IssueType, string> = {
    bug: "Bug",
    feature: "Feature",
    enhancement: "Enhancement",
    design: "Design",
  };

  const priorityLabels: Record<IssuePriority, string> = {
    critical: "Critical",
    high: "High",
    medium: "Medium",
    low: "Low",
  };

  const scopeLabels: Record<IssueScope, string> = {
    infotainment: "Infotainment",
    safety: "Safety",
    drivetrain: "Drivetrain",
    climate: "Climate",
    "mobile-app": "Mobile App",
    connectivity: "Connectivity",
    interior: "Interior",
    ux: "UX",
  };

  const getTypeColor = (type: IssueType) => {
    return match(type)
      .with("bug", () => "bg-red-100 text-red-800")
      .with("feature", () => "bg-green-100 text-green-800")
      .with("enhancement", () => "bg-blue-100 text-blue-800")
      .with("design", () => "bg-purple-100 text-purple-800")
      .exhaustive();
  };

  const getPriorityColor = (priority: IssuePriority) => {
    return match(priority)
      .with("critical", () => "bg-rose-500 text-white")
      .with("high", () => "bg-orange-100 text-orange-800")
      .with("medium", () => "bg-yellow-100 text-yellow-800")
      .with("low", () => "bg-teal-100 text-teal-600")
      .exhaustive();
  };

  const getScopeColor = () => {
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div
      className={`md:px-3 md:py-3 px-6 py-5 rounded-md transition-colors ${
        isOpen
          ? "border-2 border-[#1C6EBA]"
          : "border border-[#E0E0E0] hover:border-[#666666]"
      }`}
    >
      <div
        className={twMerge([
          "flex gap-3 md:items-start items-center justify-between md:flex-col flex-row select-none",
          !isStatic && "cursor-pointer",
        ])}
        onClick={() => {
          if (isStatic) {
            return;
          }

          if (!isOpen) {
            pageview({
              route: "/issues/[id]",
              path: `/issues/${number}`,
            });
          }

          setIsOpen(!isOpen);
        }}
      >
        <div>
          <div className="font-medium md:text-lg text-xl">{title}</div>
          <div className="flex flex-wrap gap-2 mt-2">
            <Tag className={getPriorityColor(priority)}>
              {priorityLabels[priority]}
            </Tag>
            <Tag className={getTypeColor(type)}>{typeLabels[type]}</Tag>
            {scope.map((tagKey) => (
              <Tag key={tagKey} className={getScopeColor()}>
                {scopeLabels[tagKey]}
              </Tag>
            ))}
          </div>
        </div>
        <div className="block md:flex justify-between md:w-full">
          <div className="text-gray-400 text-sm text-right">#{number}</div>
          <div className="text-gray-400 text-sm text-right">
            {DateTime.fromISO(date).toFormat("yyyy/MM/dd")}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-5 border-t">
          <ReactMarkdown className={"issue-content"}>{content}</ReactMarkdown>
          {!isStatic && (
            <div className="border-t pt-4">
              <a href={`/issue/${number}`}>
                Permalink to issue:{" "}
                <span className="underline text-[#1C6EBA]">
                  https://www.pleasevolvofixthis.com/issue/
                  {number}
                </span>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
