import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Printpage from '../../components/printpage';
import styles from '../../styles/InfoPage.module.css';

export default function FirstPost() {
  return (
    <Layout name="Lesion" current="Conditions">
      <Head>
        <title>Lesion Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <div className={styles.titleFlex}><h1 className={styles.title}>Lesion</h1><Printpage></Printpage></div>
        <h3  className={styles.inPageNav}><Link href='#Diagnosis'>Diagnosis</Link> • <Link href='#Symptoms'>Symptoms</Link> • <Link href='#Causes'>Causes</Link> • <Link href='#Treatments'>Treatments</Link> • <Link href='#Research'>Research</Link></h3>
        <h2 id="Diagnosis" className={styles.secHeading}>Diagnosis</h2>
        <p className={styles.infoParagraph}>• A facial skin lesion refers to any abnormal or unusual growth, spot, or mark on the skin of the face. These lesions can vary in size, shape, color, and texture and may be benign (non-cancerous) or malignant (cancerous). Diagnosing a facial skin lesion typically involves a clinical examination by a healthcare provider or dermatologist. In some cases, a biopsy may be performed to determine the nature of the lesion, especially if there are concerns about malignancy.</p>
        <h2 id="Symptoms" className={styles.secHeading}>Symptoms</h2>
        <p className={styles.infoParagraph}>• Symptoms of facial skin lesions can vary widely, depending on the type and cause of the lesion. Common symptoms may include discoloration of the skin, texture changes, tenderness, itching, or irritation. Monitoring facial lesions is important as lesions with changes to texture, size, shape, or color over time should be evaluated promptly. </p>
        <h2 id="Causes" className={styles.secHeading}>Causes and Risk Factors</h2>
        <p className={styles.infoParagraph}>• Facial skin lesions can have various causes and risk factors, including:<br></br>
          <b>Sun Exposure:</b> Prolonged and unprotected sun exposure is a significant risk factor for the development of facial skin lesions, including benign and malignant growths.<br></br>
          <b>Age:</b> Some lesions, such as age spots (lentigines) and skin tags, are more common as individuals age.<br></br>
          <b>Genetics:</b> A family history of certain skin conditions can increase the risk of developing facial skin lesions.<br></br>
          <b>Infections:</b> Viral infections, such as the human papillomavirus (HPV), can lead to skin lesions like warts.<br></br>
          <b>Injury or Trauma:</b> Physical injury or trauma to the skin, including scars, can result in the formation of skin lesions.<br></br>
          <b>Skin Conditions:</b> Skin conditions like acne, rosacea, or seborrheic keratosis can lead to facial skin lesions.</p>
        <h2 id="Treatments" className={styles.secHeading}>Treatment options</h2>
        <p className={styles.infoParagraph}>• The treatment of a facial skin lesion depends on its type, characteristics, and underlying cause. Some benign lesions may not require treatment and can be monitored over time to ensure they do not change or become malignant. Conservative approaches like creams or ointments containing medications like retinoids or steroids may be prescribed to treat certain lesions or alleviate symptoms. For removal there are muliple options such as freezing, lasering, or excising the lesion each with their own risks and benefits. Freezing the lesion with liquid nitrogen can be effective for removing benign growths like warts or seborrheic keratosis. Lasers can be used to remove or reduce the appearance of certain lesions, including pigmented lesions or broken blood vessels. Malignant or suspicious lesions may need to be biopsied and surgically removed (excised) to prevent cancer spread.<br></br>Regular skin checks and early evaluation by a dermatologist are essential for the prompt diagnosis and appropriate management of facial skin lesions. Early detection and treatment are crucial for ensuring the best outcomes and minimizing potential complications.</p>
        <h2 id="Research" className={styles.secHeading}>Latest Research</h2>
        <p className={styles.infoParagraph}>• The latest research regarding facial lesions can be found at:<br></br><a className={styles.LearnInfoqtip} href="https://pubmed.ncbi.nlm.nih.gov/?term=facial+lesions" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/?term=facial+lesions</a></p>
      </div>
      <p className={styles.adviceInfo}>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health.</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}