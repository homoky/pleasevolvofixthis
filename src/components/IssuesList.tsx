import { ContentWrapper } from "./ContentWrapper";

interface IssuesListProps {
  children: React.ReactNode;
}

export const IssuesList = ({ children }: IssuesListProps) => (
  <ContentWrapper>
    <div className="space-y-3">{children}</div>
  </ContentWrapper>
);
