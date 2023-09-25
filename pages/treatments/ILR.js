import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="ELR" current="Treatments">
      <Head>
        <title>ILR Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>ILR</h1>
        <div className={styles.qinfoContainer}>
          <h4 className={styles.treatmentqinfo}>Type of Treatment: Surgical, Outpatient</h4>
          <h4 className={styles.treatmentqinfo}>Commonly used to treat: <Link className={styles.inlineLink} href="/conditions/ptosis">Ptosis</Link></h4>
        </div>
        <h2 className={styles.secHeading}>Overview</h2>
        <p className={styles.infoParagraph}>• Internal Levator Resection (ILR) is a surgical procedure designed to address ptosis, a condition characterized by the drooping of the upper eyelid due to weakened or stretched levator muscles. Unlike external levator resection, which involves making external incisions, this procedure accesses and adjusts the levator muscles from inside the eyelid, resulting in improved vision and aesthetics. Internal Levator Resection is typically performed under local anesthesia with sedation, in some cases to provide optimal results the surgeon will need some cooperation during the surgery to check eyelid height and make adjustments accordingly. The surgeon makes precise incisions on the inner surface of the upper eyelid, hidden from view. Through these incisions, the levator muscles are accessed and shortened or tightened to elevate the eyelid to the desired position. This procedure effectively corrects ptosis by restoring the proper positioning of the upper eyelid. This results in improved vision and a more youthful, alert appearance. The procedure usually takes approximately 1 hour, but the exact duration may vary depending on the extent of muscle adjustment required. After the surgery, patients may experience some swelling, bruising, and mild discomfort around the eyes. These side effects typically subside within a week or two. Cold compresses and prescribed medications can help manage any discomfort. Strenuous activities should be avoided for a few weeks to allow for proper healing. An ILR offers several benefits, including improved vision, enhanced eye symmetry, and a more youthful appearance. It can also alleviate symptoms like headaches and brow strain that may result from constantly raising the eyebrows to compensate for ptosis. Consulting with an experienced oculoplastic surgeon or ophthalmologist is crucial to determine if Internal Levator Resection is the right treatment option for your specific case. They will assess your condition, discuss your goals, and create a customized treatment plan to achieve optimal results.</p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}