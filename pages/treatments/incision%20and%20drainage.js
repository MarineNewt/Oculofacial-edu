import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="ELR" current="Treatments">
      <Head>
        <title>Incision and Drainage Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>Incision and Drainage</h1>
        <div className={styles.qinfoContainer}>
          <h4 className={styles.treatmentqinfo}>Type of Treatment: Procedure, Outpatient</h4>
          <h4 className={styles.treatmentqinfo}>Commonly used to treat: <Link className={styles.inlineLink} href="/conditions/chalazion">Chalazion</Link></h4>
        </div>
        <h2 className={styles.secHeading}>Overview</h2>
        <p className={styles.infoParagraph}>• An Incision and Drainage is a minor surgical procedure used to treat a chalazion, a common eyelid condition characterized by a painless, localized swelling or bump. Chalazia develop when an oil gland (meibomian gland) in the eyelid becomes blocked and inflamed. This procedure is performed to alleviate discomfort, reduce swelling, and promote the healing of the chalazion. Drainage is a relatively quick procedure performed under just local anesthesia, usually taking around 15 to 30 minutes to complete. The surgeon makes a small incision on the inside of the eyelid or on the outside along the eyelid margin, depending on the chalazion's location and size. The incision allows the trapped fluid and debris to drain out, relieving the pressure and reducing the swelling. This procedure is highly effective in treating chalazia. Patients often experience quick relief from the pressure and discomfort associated with the chalazion and the eyelid typically returns to its normal appearance within a few weeks. After the procedure, patients may experience some mild discomfort, swelling, and tearing. These symptoms usually resolve within a few days. Warm compresses with light massaging and prescribed medications to reduce inflammation may be recommended to aid in the healing process. While not always necessary to resolve chalazia, an incision and drainage promotes the quick resolution of the chalazion, allowing patients to return to their daily activities without prolonged discomfort.</p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}