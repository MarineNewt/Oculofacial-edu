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
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>Finding and understanding oculoplastic treatments.</h1>
        <p className={styles.LearnInfoP}>Welcome to our guide on oculoplastic treatments, here you can explore a diverse array of interventions available to address a wide spectrum of oculofacial conditions. Oculoplastics treatments encompass a spectrum ranging from non-invasive procedures to intricate surgical techniques, all designed to restore function, alleviate discomfort, and enhance aesthetics. The approach to treating oculofacial conditions is highly personalized, considering factors such as the severity of the condition, the patient's unique anatomy, and their desired outcomes. For milder cases, conservative approaches like topical therapies or minimally invasive procedures might suffice. In more complex scenarios, surgical interventions such as eyelid reconstruction, orbital decompression, or tear duct repair might be necessary to achieve optimal results. Our aim is to provide you with comprehensive insights into the types of treatments available, ensuring that you are equipped with the knowledge needed to collaborate with your oculoplastic specialist in determining the most suitable treatment plan for your individual needs.</p>
        <p className={styles.LearnInfoqtip}>Not sure where to start? Find corresponding treatments to specific <Link className={styles.none} href="/conditions/learn">conditions</Link> through their diagnosis page.</p>
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}