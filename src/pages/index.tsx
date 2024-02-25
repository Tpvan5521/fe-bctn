import Layout from "@/components/layout/Layout";
import HomeScreen from "@/screens/home/HomeScreen";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home screen description" />
      </Head>
      <Layout>
        <HomeScreen />
      </Layout>
    </>
  );
}
