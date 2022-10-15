import Head from "next/head";
import Features from "../components/Features";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create neutech information technologies</title>
      </Head>
      <Hero />
      <Features />
    </>
  );
}
