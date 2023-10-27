import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/InfoPage.module.css';

export default function Learn() {
  return (
    <Layout name="Learn" current="Conditions">
      <Head>
        <title>Conditions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.primaryContent}>
        <h1 className={styles.title}>Identifying common oculofacial conditions.</h1>
        <p className={styles.LearnInfoP}>Welcome to our informational oculoplastics resource, dedicated to shedding light on some of the most common oculofacial conditions and their signs. Being our window into the world and our initial presentation to those around us the oculofacial region is undeniably important. However, with age, genetics, and injury it is not uncommon for oculofacial conditions to arise causing serious impact to our every day routine.  From eyelid malpositions and tear duct disorders to orbital tumors and facial trauma, understanding these conditions is essential not only for preserving vision and ocular comfort but also for nurturing self-confidence and emotional well-being. By comprehending the intricate anatomy and function of this delicate region, we can better diagnose and treat various oculofacial conditions that might impact an individual's quality of life. Use the following materials to better familiarize yourself with oculofacial conditions empowering you with knowledge to make informed decisions about your eye health and appearance.</p>
        <h2 className={styles.secHeading}>Most common conditions</h2>
        <h3>Ptosis</h3><h3>Dermatochalasis</h3><h3>Chalazion</h3>
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}