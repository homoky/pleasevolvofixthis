import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { DateTime } from "luxon";

interface IssueProps {
  title: string;
  content: string;
  number: number;
  date: string;
}

export const Issue = ({ title, number, content, date }: IssueProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`px-6 py-5 rounded-md cursor-pointer transition-colors ${
        isOpen
          ? "border-2 border-[#1C6EBA]"
          : "border border-[#E0E0E0] hover:border-[#666666]"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-3 md:items-start items-center justify-between md:flex-col flex-row select-none">
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
