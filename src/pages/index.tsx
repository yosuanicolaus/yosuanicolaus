import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { TestComponent } from "../components/test";

type HomeProps = {
  testProp: string;
};

const Home: NextPage<HomeProps> = ({ testProp }) => {
  return (
    <>
      <Head>
        <title>yosuanicolaus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>hello world</div>
        <TestComponent text="nice world" />
        <div>{testProp}</div>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      testProp: "hi " + Math.random(),
    },
  };
};
