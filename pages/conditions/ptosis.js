import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout name="Ptosis">
      <Head>
        <title>Ptosis Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Ptosis</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}