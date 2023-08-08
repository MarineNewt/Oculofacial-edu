import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="ELR" current="Treatments">
      <Head>
        <title>ELR Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>ELR</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}