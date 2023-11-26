import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="Blepharoplasty" current="Treatments">
      <Head>
        <title>Botox Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>Botox</h1>
        <div className={styles.qinfoContainer}>
          <h4 className={styles.treatmentqinfo}>Type of Treatment: Procedure, Outpatient</h4>
          <h4 className={styles.treatmentqinfo}>Commonly used to treat: <Link className={styles.inlineLink} href="/conditions/blepharospasm">Blepharospasm</Link></h4>
        </div>
        <h2 className={styles.secHeading}>Overview</h2>
        <p className={styles.infoParagraph}>• Botox Injections, a widely sought procedure for both medical and cosmetic purposes, can reduce the effects of muscle spasms as well as effectively diminish the appearance of fine lines and wrinkles. Administered by a skilled healthcare professional, Botox involves precise injections of Botulinum Toxin into targeted facial muscles using a fine needle. The treatment typically takes 15-20 minutes, and patients can resume normal activities immediately. Botox works by blocking nerve signals, temporarily relaxing muscles causing irritation, or in cosmetic cases, those responsible for dynamic wrinkles. Results become noticeable within days, reaching their peak after about two weeks and lasting three to five months. While generally well-tolerated, a topical numbing cream may enhance comfort during the procedure. Post-injection, patients are advised to avoid rubbing the treated areas, and any temporary redness or swelling usually subsides quickly. Botox is often beneficial as a first step treatment that is easy to try with reversible effects and customization for specific areas of concern. Consulting with a qualified healthcare professional ensures a personalized plan aligned with individual goals and expectations.</p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}