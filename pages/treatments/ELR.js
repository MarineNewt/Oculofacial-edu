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
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>ELR</h1>
        <div className={styles.qinfoContainer}>
          <h4 className={styles.treatmentqinfo}>Type of Treatment: Surgical, Outpatient</h4>
          <h4 className={styles.treatmentqinfo}>Commonly used to treat: <Link className={styles.inlineLink} href="/conditions/ptosis">Ptosis</Link></h4>
        </div>
        <h2 className={styles.secHeading}>Overview</h2>
        <p className={styles.infoParagraph}>• External Levator Resection (ELR) is a surgical procedure designed to address ptosis, a condition characterized by the drooping of the upper eyelid due to weakened or stretched levator muscles. This procedure involves the shortening or tightening of these muscles to restore the proper positioning of the eyelid, resulting in improved vision and aesthetics. An External Levator Resection is typically performed under local anesthesia with sedation or general anesthesia, depending on the patient's comfort and the surgeon's recommendation. As opposed to an ILR which is usually used in less severe ptosis cases, The surgeon makes precise incisions in the upper eyelid crease to access the levator muscles. These muscles are then shortened and repositioned, allowing for better elevation of the eyelid. External Levator Resection can effectively correct ptosis, ensuring that the upper eyelid rests at the appropriate height, thereby improving both vision and the aesthetic appearance of the eyes. The results are often a more alert and youthful appearance. The procedure usually takes approximately 1 hour, but the exact duration may vary depending on the extent of muscle adjustment needed. After the surgery, patients may experience some swelling, bruising, and mild discomfort around the eyes. These side effects typically subside within a week or two. Cold compresses and prescribed medications can help manage any discomfort. Strenuous activities should be avoided for a few weeks to allow for proper healing. Undergoing an ELR offers several benefits, including improved vision, enhanced eye symmetry, and a more youthful appearance. It can also alleviate symptoms like headaches and brow strain that may result from constantly raising the eyebrows to compensate for ptosis. Consulting with an experienced oculoplastic surgeon or ophthalmologist is crucial to determine if an ELR is the right treatment option for your specific case. They will assess your condition, discuss your goals, and create a customized treatment plan to achieve optimal results.</p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}