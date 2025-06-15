import { DateTime } from "luxon";

interface LastIssueInfoProps {
  issueNumber: number;
  date: string;
}

export const LastIssueInfo = ({ issueNumber, date }: LastIssueInfoProps) => (
  <div className="text-center mt-8 text-sm text-gray-400">
    Last issue #{issueNumber} reported on{" "}
    {DateTime.fromISO(date).setLocale('en').toLocaleString(DateTime.DATE_SHORT)}.
  </div>
);
