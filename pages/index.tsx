import Head from "next/head";
import Link from "next/link";
// import Script from "next/script";
// import styles from "../styles/Home.module.css";
// import MyComponent from "./posts/first-post";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

import Date from "../components/date";
import styled from "styled-components";
import { GetStaticProps } from "next";

const Component = styled.div`
  color: red;
`;

const StyleA = styled.a`
  background-color: black;
  cursor: pointer;
`;

interface Props {
  allPostsData: {
    id: number;
    title: string;
    date: string;
  }[];
}

const RedLink = styled.a`
  color: red;
  border: 1px red solid;
`;

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I`&apos;`m <strong>Talismar</strong>. I`&apos;`m a study ADS
        </p>
        <p>
          This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
        <Component>Teste</Component>
      </section>

      {/* <h1>{JSON.stringify(allPostsData)}</h1> */}

      {/* <Component as={StyleA} onClick={() => alert("It Works")}>
        Hello World!
      </Component>

      Para estilizar uma tag a usando o Link do NextJS
      <Link href={"/asd"} passHref legacyBehavior>
        <RedLink>Teste of change page</RedLink>
      </Link> */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
