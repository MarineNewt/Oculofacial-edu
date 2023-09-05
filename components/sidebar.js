import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';

export default function Sidebar({ current, children }) {
  let conditionlist = ["dermatochalasis", "ptosis", "brow ptosis", "chalazion", "facial lesion", "blepharospasm",];
  let treatmentlist = ["blepharoplasty", "lower blepharoplsty", "ELR", "ILR", "brow lift", "incision and drainage", "botox"];
  let targetlist = []
  if(current === "Conditions"){targetlist = conditionlist;}else{targetlist = treatmentlist;}
    return <div className={styles.bar}>
      <Link className={styles.sectionWrapper} href={"/", current, "/", "learn"}><h1 className={styles.section}>{current}</h1></Link>
      <div className={styles.linkList}>{targetlist.map((page) => {return(<Link  className={styles.link} href={"/", current, "/", page}>• {page}</Link>)})}</div>
    
    </div>
  }