import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="ELR" current="Treatments">
      <Head>
        <title>Temporal Brow Lift Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>Temporal Brow Lift</h1>
        <div className={styles.qinfoContainer}>
          <h4 className={styles.treatmentqinfo}>Type of Treatment: Surgical, Outpatient</h4>
          <h4 className={styles.treatmentqinfo}>Commonly used to treat: <Link className={styles.inlineLink} href="/conditions/browptosis">Brow Ptosis</Link></h4>
        </div>
        <h2 className={styles.secHeading}>Overview</h2>
        <p className={styles.infoParagraph}>• A Temporal Brow Lift is a surgical procedure designed to elevate and rejuvenate the outer portion of the eyebrows and forehead. This procedure aims to address concerns such as sagging eyebrows, forehead wrinkles, and frown lines, resulting in a more youthful and refreshed appearance.A Temporal Brow Lift is can performed under local anesthesia with sedation or general anesthesia, depending on the patient's comfort and the surgeon's recommendation. The surgeon makes discreet incisions within the hairline at the temples. Through these incisions, the underlying tissues and muscles are adjusted to lift and reposition the outer portion of the eyebrows, creating a more youthful and alert appearance. The procedure usually takes approximately 1 to 2 hours, but the exact duration may vary depending on the extent of correction needed. Following the surgery, patients may experience some swelling, bruising, and mild discomfort around the temples and forehead. These side effects typically subside within a week or two. Cold compresses and prescribed medications can help manage any discomfort and an antibiotic ointment is usually used to avoid risks of infection. Patients can typically return to their normal activities within a few weeks. Undergoing a temporal brow lift offers several benefits, including a more youthful appearance, improved eye symmetry, and the reduction of forehead wrinkles and frown lines. It can also alleviate tension and strain in the forehead and brow area, which may have resulted from sagging eyebrows. Consulting with an experienced plastic surgeon or facial plastic surgeon is essential to determine if a Temporal Brow Lift is suitable for your unique needs. They will assess your specific concerns, discuss your goals, and create a customized treatment plan to achieve optimal results.</p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}