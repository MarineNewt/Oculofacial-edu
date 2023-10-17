import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="ELR" current="Treatments">
      <Head>
        <title>Lower Blepharoplasty Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>Lower Blepharoplasty</h1>
        <div className={styles.qinfoContainer}>
          <h4 className={styles.treatmentqinfo}>Type of Treatment: Surgical, Outpatient</h4>
          <h4 className={styles.treatmentqinfo}>Commonly used to treat: <Link className={styles.inlineLink} href="/conditions/steatoblepharon">Steatoblepharon</Link></h4>
        </div>
        <h2 className={styles.secHeading}>Overview</h2>
        <p className={styles.infoParagraph}>• Lower Blepharoplasty, also known as lower eyelid surgery, is a precise surgical procedure designed to rejuvenate the lower eyelids by addressing issues such as under-eye bags, puffiness, excess skin, and wrinkles. During the procedure, excess fat and skin are removed, and if necessary, underlying muscles and tissues are repositioned to achieve a smoother, more youthful appearance.Lower Blepharoplasty is typically performed under local anesthesia with concious sedation, depending on the patient's preference and the surgeon's recommendation. The surgeon makes discreet incisions along the lower eyelid, usually along the lash line or inside the lower lid (transconjunctival approach). Excess fat and skin are meticulously removed or repositioned, and any necessary adjustments to underlying tissues are made to achieve the desired contour. The procedure usually takes about 1 to 2 hours, depending on the complexity and whether it's combined with other cosmetic surgeries such as lasering to tighten the skin afterwards. After the surgery, patients may experience some swelling, bruising, and mild discomfort around the eyes. These side effects typically subside within a week or two. Cold compresses and prescribed medications can help manage any discomfort. Strenuous activities should be avoided for a few weeks to allow for proper healing. A lower blepharoplasty can deliver remarkable results, reducing the appearance of under-eye bags, puffiness, and wrinkles. The eyes look more refreshed, youthful, and rejuvenated. Consulting with an experienced oculoplastic surgeon or board-certified plastic surgeon is essential to determine if lower blepharoplasty is suitable for your unique needs. They will assess your specific concerns, discuss your goals, and create a customized treatment plan to achieve optimal results.</p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}