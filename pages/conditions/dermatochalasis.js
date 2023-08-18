import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="Dermato" current="Conditions">
      <Head>
        <title>Dermatochalasis Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Dermatochalasis</h1>
      <h3><Link href='#Diagnosis'>Diagnosis</Link> • <Link href='#Symptoms'>Symptoms</Link> • <Link href='#Causes'>Causes</Link> • <Link href='#Treatments'>Treatments</Link> • <Link href='#Research'>Research</Link></h3>
      <h2 id="Diagnosis" className={styles.secHeading}>Diagnosis</h2>
      <p id="Symptoms"className={styles.infoParagraph}>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2  className={styles.secHeading}>Symptoms</h2>
      <p id="Causes" className={styles.infoParagraph}>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2 className={styles.secHeading}>Causes and Risk Factors</h2>
      <p id="Treatments" className={styles.infoParagraph}>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2 className={styles.secHeading}>Treatment options</h2>
      <p id="Research" className={styles.infoParagraph}>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2 className={styles.secHeading}>Latest Research</h2>
      <p className={styles.infoParagraph}>• The latest research regarding dermatochalasis can be found at:<br></br>https://link...</p>
      <p>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}