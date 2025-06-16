import { InferGetStaticPropsType } from "next";
import { Page } from "@/components/Page";
import { useRouter } from "next/router";
import { getIssues } from "@/utils/parseIssues";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Disclaimer } from "@/components/Disclaimer";
import { IssuesList } from "@/components/IssuesList";
import { Issue } from "@/components/Issue";

const Home = ({
  issue,
  issues,
  number,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <Page titleTag={`Issue #${number}: ${issue.title} | Please Volvo Fix This`}>
      <Hero numberOfIssues={issues.length} />
      <IssuesList>
        <Issue {...issue} number={parseInt(number)} isStatic />
      </IssuesList>
      <div className="flex justify-center pb-8">
        <Button
          title="Check out other issues"
          onClick={() => router.push("/")}
        />
      </div>
      <Disclaimer />
    </Page>
  );
};

export async function getStaticPaths() {
  const issues = getIssues();

  const paths = issues.map((issue) => {
    const id = issue.fileName.split("-")[0];

    return {
      params: { id },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const issues = getIssues();

  const issue = issues.find((issue) => issue.fileName.includes(params.id));

  if (!issue) {
    throw new Error("Issue not found");
  }

  return {
    props: {
      issue,
      issues,
      number: params.id,
    },
  };
}

export default Home;
