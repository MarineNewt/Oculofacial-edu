import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Printpage from '../../components/printpage';
import styles from '../../styles/InfoPage.module.css';


export default function FirstPost() {
  return (
    <Layout name="Blepharospasm" current="Conditions">
      <Head>
        <title>Blepharospasm Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="primaryContent" className={styles.primaryContent}>
        <div className={styles.titleFlex}><h1 className={styles.title}>Blepharospasm</h1><Printpage></Printpage></div>
        <h3  className={styles.inPageNav}><Link href='#Diagnosis'>Diagnosis</Link> • <Link href='#Symptoms'>Symptoms</Link> • <Link href='#Causes'>Causes</Link> • <Link href='#Treatments'>Treatments</Link> • <Link href='#Research'>Research</Link></h3>
        <h2 id="Diagnosis" className={styles.secHeading}>Diagnosis</h2>
        <p className={styles.infoParagraph}>• Dermatochalasis t.</p>
        <h2 id="Symptoms" className={styles.secHeading}>Symptoms</h2>
        <p className={styles.infoParagraph}>• Dermatochalasis t.</p>
        <h2 id="Causes" className={styles.secHeading}>Causes and Risk Factors</h2>
        <p className={styles.infoParagraph}>• The </p>
        <h2 id="Treatments" className={styles.secHeading}>Treatment options</h2>
        <p className={styles.infoParagraph}>• Advanced .</p>
        <h2 id="Research" className={styles.secHeading}>Latest Research</h2>
        <p className={styles.infoParagraph}>• The latest research regarding dermatochalasis can be found at:<br></br><a className={styles.LearnInfoqtip} href="https://pubmed.ncbi.nlm.nih.gov/?term=dermatochalasis" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/?term=dermatochalasis</a></p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}