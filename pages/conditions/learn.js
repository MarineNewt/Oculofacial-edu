import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function Learn() {
  return (
    <Layout name="Learn" current="Conditions">
      <Head>
        <title>Conditions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Identifying common oculofacial conditions.</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}