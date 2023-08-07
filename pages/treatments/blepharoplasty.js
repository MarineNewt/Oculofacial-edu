import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout name="Blepharoplasty" current="Treatments">
      <Head>
        <title>Blepharoplasty Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blepharoplasty</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}