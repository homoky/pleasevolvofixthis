import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

type PageProps = {
  titleTag: `${string} | Please Volvo Fix This` | "Please Volvo Fix This";
  children: ReactNode;
};

export const Page = ({ titleTag, children }: PageProps) => (
  <main className={inter.className}>
    <Head>
      <title>{titleTag}</title>
    </Head>
    {children}
  </main>
);
