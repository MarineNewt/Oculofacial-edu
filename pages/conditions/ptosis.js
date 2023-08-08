import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="Ptosis" current="Conditions">
      <Head>
        <title>Ptosis Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Ptosis</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}