import styles from '../styles/PageLayout.module.css';
import utilStyles from '../styles/utils.module.css';
import Nav from './navbar.js'
import Sidebar from './sidebar.js'

export default function ConditionLayout({ name, children }) {
    return <>
      <Nav></Nav>
      <div className={styles.wrapper}>
        <Sidebar className={styles.sidebar}></Sidebar>
        <div className={styles.content}>hello {children}</div>;
      </div>
    </>
  }