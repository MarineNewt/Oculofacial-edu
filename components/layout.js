import styles from '../styles/PageLayout.module.css';
import utilStyles from '../styles/utils.module.css';
import Nav from './navbar.js'
import Sidebar from './sidebar.js'

export default function ConditionLayout({ name, current, children }) {
    return <>
      <Nav></Nav>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}><Sidebar current={current}></Sidebar></div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  }