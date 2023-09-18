import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Printpage from '../../components/printpage';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="Chalazion" current="Conditions">
      <Head>
        <title>Chalazion Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="primaryContent" className={styles.primaryContent}>
        <div className={styles.titleFlex}><h1 className={styles.title}>Chalazion</h1><Printpage></Printpage></div>
        <h3  className={styles.inPageNav}><Link href='#Diagnosis'>Diagnosis</Link> • <Link href='#Symptoms'>Symptoms</Link> • <Link href='#Causes'>Causes</Link> • <Link href='#Treatments'>Treatments</Link> • <Link href='#Research'>Research</Link></h3>
        <h2 id="Diagnosis" className={styles.secHeading}>Diagnosis</h2>
        <p className={styles.infoParagraph}>• A chalazion is a common and typically non-painful eyelid condition caused by the blockage of an oil gland (meibomian gland) within the eyelid. It typically appears as a small, painless bump or swelling on the upper or lower eyelid. Chalazia can vary in size and might initially resemble a stye (hordeolum), but unlike a stye, they tend to develop more gradually and are usually not associated with infection. Diagnosis is primarily clinical, based on the characteristic appearance and location of the eyelid lump.</p>
        <h2 id="Symptoms" className={styles.secHeading}>Symptoms</h2>
        <p className={styles.infoParagraph}>• Common symptoms of a chalazion may include:<br></br><b>Eyelid Bump:</b> The most noticeable symptom is a firm, painless lump on the eyelid. This bump can vary in size<br></br><b>Tenderness:</b> Although chalazia are generally not painful, there may be mild tenderness or discomfort associated with the swelling.<br></br><b>Blurry Vision:</b> In some cases, a large chalazion may press on the eye's surface, causing slight blurriness or distortion of vision.<br></br><b>Increased Tear Production:</b> Some individuals may experience increased tearing or watery eyes.</p>
        <h2 id="Causes" className={styles.secHeading}>Causes and Risk Factors</h2>
        <p className={styles.infoParagraph}>• Chalazia are typically caused by the blockage or obstruction of oil-producing glands within the eyelids. Much like a pimple, oftentimes a chalazion can occur without a direct cause of the gland blockage, however there are potential risks that can increase the severity or frequency of those who see recurrence. An inflammation of the eyelid margins for example can lead to blockages in the oil glands, increasing the risk of chalazia. Dysfunction of the meibomian glands themsleves, which produce the oils that help maintain tear film stability, can contribute to chalazion formation. Additionaly, inadequate eyelid hygiene practices can lead to the accumulation of debris and oils along the eyelid margins, further increasing the risk of gland blockage. </p>
        <h2 id="Treatments" className={styles.secHeading}>Treatment options</h2>
        <p className={styles.infoParagraph}>• Chalazia often resolve on their own without treatment, but several options are available for managing and accelerating the healing process. At home you can begin care with warm compresses and improved eyelid hygiene. Applying warm compresses to the affected eyelid several times a day can help soften the blocked gland and promote drainage especially within the early stages of onset. Practicing good eyelid hygiene in general, such as cleaning the eyelid margins with gentle baby shampoo or lid scrubs, can help prevent formation or recurrence. <br></br><br></br> In some cases, individuals may seek professional help to resolve the chalazion sooner or deal with one that lasts for a prolonged period of time. Treatment options may include topical steroids and antibiotics, steroid injections, or an incision and drainage. Topical ointments can be used to help avoid infection as well as reduce inflammation that may be caused by the chalazion. A steroid injection may be considered to reduce inflammation and speed up the healing process for larger or persistent chalazia. If a chalazion doesn't respond to other treatments, a minor surgical procedure involving an incision on the backside of the eyelid may be necessary to drain the blocked gland. For those with recurrent chalazia, preventative options also exist such as an oral antibiotics course which can be taken over 1-3 months.</p>
        <h2 id="Research" className={styles.secHeading}>Latest Research</h2>
        <p className={styles.infoParagraph}>• The latest research regarding chalazions can be found at:<br></br><a className={styles.LearnInfoqtip} href="https://pubmed.ncbi.nlm.nih.gov/?term=chalazion" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/?term=chalazion</a></p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}