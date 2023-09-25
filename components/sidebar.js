import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';

export default function Sidebar({ current, children }) {
  /* Add updated items to both searchbarjs and sidebarjs  */
  let conditionlist = ["dermatochalasis", "ptosis", "browptosis", "chalazion", "lesion", "blepharospasm"];
  let treatmentlist = ["blepharoplasty", "lower blepharoplsty", "ELR", "ILR", "temporal brow lift", "incision and drainage"];
  let targetlist = []
  if(current === "Conditions"){targetlist = conditionlist;}else{targetlist = treatmentlist;}
    return <div className={styles.bar}>
      <Link className={styles.sectionWrapper} href={"/", current, "/", "learn"}><h1 className={styles.section}>{current}</h1></Link>
      <div className={styles.linkList}>{targetlist.map((page) => {return(<Link key={page} className={styles.link} href={"/", current, "/", page}>• {page}</Link>)})}</div>
    
    </div>
  }