import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="Blepharoplasty" current="Treatments">
      <Head>
        <title>Blepharoplasty Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>Blepharoplasty</h1>
        <div className={styles.qinfoContainer}>
          <h4 className={styles.treatmentqinfo}>Type of Treatment: Surgical, Outpatient</h4>
          <h4 className={styles.treatmentqinfo}>Commonly used to treat: <Link className={styles.inlineLink} href="/conditions/dermatochalasis">Dermatochalasis</Link></h4>
        </div>
        <h2 className={styles.secHeading}>Overview</h2>
        <p className={styles.infoParagraph}>• A Blepharoplasty, a precise surgical procedure, involves removing excess skin from the upper eyelids and, if necessary, repositioning or tightening underlying tissues. This procedure is used to treat <Link href='/condition/dermatochalasis'>dermatochalasis</Link> when excess skin becomes problematic hanging over the eyes and affecting a person's field of vision. Usually a blepharoplasty takes around 30 minutes to do and can be done under just local anesthetic. However, more invovled anesthesia options are frequently offered and each surgeon will have their preffered methodlogy to ensuring a smooth surgery. After the surgery recovery usually involves daily use of an antibiotic ointment, cold compresses, and taking some time off from rigorous activities. Although the primary onset of bruising and swelling usually lasts 1-2 weeks, swelling can sometimes linger for around a month before resolving. A blepharoplasty is a great option for those struggling with dermatochalasis as not only can this procedure improve peripheral vision, but it also eliminates the need for constant forehead muscle engagement. An experienced oculoplastic surgeon can tailor the treatment to your unique needs, ensuring optimal results that enhance both your visual function and overall facial aesthetics.</p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}