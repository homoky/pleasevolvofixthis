import { useState } from "react";
import { InferGetStaticPropsType } from "next";
import { Page } from "@/components/Page";
import { getIssues } from "@/utils/parseIssues";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Press } from "@/components/Press";
import { Disclaimer } from "@/components/Disclaimer";
import { IssuesList } from "@/components/IssuesList";
import { Issue } from "@/components/Issue";
import { LastIssueInfo } from "@/components/LastIssueInfo";
import { TagFilter } from "@/components/TagFilter";

const Home = ({ issues }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredIssues =
    selectedTags.length === 0
      ? issues
      : issues.filter((issue) =>
          selectedTags.some(
            (tag) =>
              issue.type === tag ||
              issue.priority === tag ||
              issue.scope.includes(tag as any)
          )
        );

  return (
    <Page titleTag="Please Volvo Fix This">
      <Hero numberOfIssues={issues.length} variant="homepage" />
      <Press />

      <IssuesList>
        <TagFilter
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />

        {filteredIssues.map((issue, index) => (
          <Issue {...issue} number={parseInt(issue.fileName.split("-")[0])} key={index} />
        ))}
      </IssuesList>
      <LastIssueInfo date={issues[0].date} />
      <AboutMe />
      <Disclaimer />
    </Page>
  );
};

export async function getStaticProps() {
  const issues = getIssues();

  return {
    props: {
      issues,
    },
  };
}

export default Home;
