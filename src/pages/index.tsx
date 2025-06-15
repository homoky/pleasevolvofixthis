import { InferGetStaticPropsType } from "next";
import { Page } from "@/components/Page";
import { getIssues } from "@/utils/parseIssues";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Disclaimer } from "@/components/Disclaimer";
import { IssuesList } from "@/components/IssuesList";
import { Issue } from "@/components/Issue";
import { LastIssueInfo } from "@/components/LastIssueInfo";

const Home = ({ issues }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page titleTag="Please Volvo Fix This">
    <Hero numberOfIssues={issues.length} />
    <LastIssueInfo
      issueNumber={issues.length}
      date={issues[issues.length - 1].date}
    />
    <IssuesList>
      {issues.map((issue, index) => (
        <Issue {...issue} number={index + 1} key={index} />
      ))}
    </IssuesList>
    <AboutMe />
    <Disclaimer />
  </Page>
);

export async function getStaticProps() {
  const issues = getIssues();

  return {
    props: {
      issues,
    },
  };
}

export default Home;
