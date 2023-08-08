import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function Learn() {
  return (
    <Layout name="Learn" current="Treatments">
      <Head>
        <title>Conditions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>Finding and understanding oculoplastic treatments.</h1>

      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}