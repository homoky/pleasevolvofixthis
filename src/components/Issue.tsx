import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { DateTime } from "luxon";
import { pageview } from "@vercel/analytics";
import { twMerge } from "tailwind-merge";

interface IssueProps {
  title: string;
  content: string;
  number: number;
  date: string;
  isStatic?: boolean;
}

export const Issue = ({
  title,
  number,
  content,
  date,
  isStatic,
}: IssueProps) => {
  const [isOpen, setIsOpen] = useState(isStatic);

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
        </div>
        <div className="block md:flex justify-between md:w-full">
          <div className="text-gray-400 text-sm text-right">#{number}</div>
          <div className="text-gray-400 text-sm text-right">
            {DateTime.fromISO(date).toFormat("yyyy/MM/dd")}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-5 border-t bordert-[#666666]">
          <ReactMarkdown className={"issue-content"}>{content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};
