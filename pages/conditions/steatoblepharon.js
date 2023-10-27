import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Printpage from '../../components/printpage';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="Ptosis" current="Conditions">
      <Head>
        <title>Steatoblepharon Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <div className={styles.titleFlex}><h1 className={styles.title}>Steatoblepharon</h1><Printpage></Printpage></div>
        <h3 className={styles.inPageNav}><Link href='#Diagnosis'>Diagnosis</Link> • <Link href='#Symptoms'>Symptoms</Link> • <Link href='#Causes'>Causes</Link> • <Link href='#Treatments'>Treatments</Link> • <Link href='#Research'>Research</Link></h3>
        <h2 id="Diagnosis" className={styles.secHeading}>Diagnosis</h2>
        <p className={styles.infoParagraph}>• Lower Eyelid Steatoblepharon is a condition characterized by the accumulation of excess fat within the lower eyelid, leading to puffiness and swelling. It is typically a result of the aging process, causing the lower eyelid to lose its youthful contour and create a tired or aged appearance. Diagnosis is primarily clinical, with a healthcare provider or oculoplastic surgeon evaluating the appearance of the lower eyelid and the presence of fatty deposits.</p>
        <h2 id="Symptoms" className={styles.secHeading}>Symptoms</h2>
        <p className={styles.infoParagraph}>• The most common symptoms of lower eyelid steatoblepharon are aesthetic concerns of changes to the face that create a tired or aged appearance. These typically occur in the form of puffiness and bulging below the eyes which also contribute to additional fine lines and wrinkles.</p>
        <h2 id="Causes" className={styles.secHeading}>Causes and Risk Factors</h2>
        <p className={styles.infoParagraph}>• The primary cause of Lower Eyelid Steatoblepharon is the aging of the lower eyelid tissues, particularly the weakening and redistribution of fat. Several factors contribute to the development of this condition and put individuals at risk, including:<br></br><b>Aging:</b> The natural aging process can lead to the weakening of supportive structures in the lower eyelid, causing fat to redistribute and accumulate in certain areas.<br></br><b>Genetics:</b> A family history of under-eye puffiness or bags can increase the risk of developing Lower Eyelid Steatoblepharon.<br></br><b>Lifestyle Factors:</b> Factors like smoking, excessive sun exposure, and poor skincare habits can accelerate the aging of the lower eyelid skin.</p>
        <h2 id="Treatments" className={styles.secHeading}>Treatment options</h2>
        <p className={styles.infoParagraph}>• Lower Eyelid Steatoblepharon progression can sometimes be reduced through healthy lifestyle practices such as avoiding smoking and using sun protection when outside for prolonged periods of time. When steatoblepharon is developed treatment options primarily include lasers to tighten the skin or a <Link href="/treatments/lower%20blepharoplsty">lower blepharoplasty</Link> to remove the underlying fat. Laser procedures such as CO2 laser will not treat the prolapsed fat, but in milder cases can tighten the skin to reduce folds and wrinkles. A lower eyelid blepharoplasty is a surgical procedure that directly removes the excess fat present and tightens the lower eyelid, restoring a more youthful contour. Consulting with an experienced oculoplastic surgeon or plastic surgeon is essential to determine the most appropriate treatment plan for Lower Eyelid Steatoblepharon. They will assess your condition, discuss your goals, and create a customized treatment plan to achieve the desired results, restoring a more youthful and refreshed lower eyelid appearance.
        </p>
        <h2 id="Research" className={styles.secHeading}>Latest Research</h2>
        <p className={styles.infoParagraph}>• The latest research regarding ptosis can be found at:<br></br><a className={styles.LearnInfoqtip} href="https://pubmed.ncbi.nlm.nih.gov/?term=steatoblepharon" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/?term=Steatoblepharon</a></p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}