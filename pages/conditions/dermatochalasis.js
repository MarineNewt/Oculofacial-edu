import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="Dermato" current="Conditions">
      <Head>
        <title>Dermatochalasis Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>Dermatochalasis</h1>
        <h3 id="Diagnosis" className={styles.inPageNav}><Link href='#Diagnosis'>Diagnosis</Link> • <Link href='#Symptoms'>Symptoms</Link> • <Link href='#Causes'>Causes</Link> • <Link href='#Treatments'>Treatments</Link> • <Link href='#Research'>Research</Link></h3>
        <h2 className={styles.secHeading}>Diagnosis</h2>
        <p id="Symptoms"className={styles.infoParagraph}>• Dermatochalasis is a common yet often overlooked condition that can impact both vision and appearance. Dermatochalasis refers to the gradual stretching and sagging of the skin of the upper eyelids, often a result of the natural aging process and prolonged sun exposure. This condition can lead to excessive skin accumulation, causing a tired and droopy appearance, obscuring the natural crease of the eyelid, and in some cases, even obstructing one's field of vision. Identifying dermatochalasis involves observing the presence of redundant skin on the upper eyelids, which may become more prominent when the eyes are open or while applying makeup. If you find yourself constantly raising your brows to alleviate a heavy sensation or if your peripheral vision seems compromised, dermatochalasis could be the culprit.</p>
        <h2  className={styles.secHeading}>Symptoms</h2>
        <p id="Causes" className={styles.infoParagraph}>• Dermatochalasis can lead to various long-term symptoms that extend beyond mere aesthetic concerns. Two prominent issues often associated with dermatochalasis are the loss of peripheral vision and headaches caused by compensatory actions. As the excess skin accumulates on the upper eyelids, it can gradually obscure the upper field of vision which is crucial for detecting objects and movements in the outer edges of your visual field. The sagging skin can create a "hooding" effect, causing a physical obstruction that hampers the ability to see things from the sides without adjusting the position of your head or eyebrows. Over time, this loss of peripheral vision can impact daily activities such as driving, walking, or even participating in sports, potentially posing safety risks. Addionally, individuals with dermatochalasis often find themselves subconsciously raising their eyebrows and furrowing their forehead to lift the heavy, drooping skin from their field of vision. This constant effort to overcome the obstruction can lead to tension and strain in the forehead and brow area. The prolonged muscle contraction required to keep the skin out of the line of sight can trigger tension headaches further contributing to discomfort.</p>
        <h2 className={styles.secHeading}>Causes and Risk Factors</h2>
        <p id="Treatments" className={styles.infoParagraph}>• The primary cause of dermatochalasis is the natural aging of the skin and tissues. Over time, the skin's collagen and elastin fibers begin to weaken and degrade, leading to a loss of skin elasticity. As a result, the skin on the upper eyelids becomes less able to spring back to its original position, leading to sagging and excess skin accumulation. Several other external factors can also accelerate the degeneration of skin elasticity. These factors that contribute to the development of dermatochalasis and put individuals at risk for this condition are sun exposure, genetics, smoking habits, repetitive eyelid motions, weight fluctuations, and ethnicity.</p>
        <h2 className={styles.secHeading}>Treatment options</h2>
        <p id="Research" className={styles.infoParagraph}>• Advanced dermatochalasis often requires removal of the excess drooping skin in a procedure called a <Link href='/treatments/blepharoplasty'>Blepharoplasty</Link>. A blepharoplasty is a quick outpatient procedure which involves removing excess skin and, if necessary, repositioning or tightening underlying tissues. This not only improves peripheral vision but also eliminates the need for constant forehead muscle engagement. An experienced oculoplastic surgeon can tailor the treatment to your unique needs, ensuring optimal results that enhance both your visual function and overall facial aesthetics.</p>
        <h2 className={styles.secHeading}>Latest Research</h2>
        <p className={styles.infoParagraph}>• The latest research regarding dermatochalasis can be found at:<br></br><a className={styles.LearnInfoqtip} href="https://pubmed.ncbi.nlm.nih.gov/?term=dermatochalasis" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/?term=dermatochalasis</a></p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}