import { DateTime } from "luxon";

interface LastIssueInfoProps {
  issueNumber: number;
  date: string;
}

export const LastIssueInfo = ({ issueNumber, date }: LastIssueInfoProps) => (
  <div className="text-center text-sm text-gray-400 mb-8">
    Last issue was reported on {DateTime.fromISO(date).toFormat("yyyy/MM/dd")}.
  </div>
);
