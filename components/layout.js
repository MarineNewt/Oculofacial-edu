import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Nav from './navbar.js'

export default function ConditionLayout({ name, children }) {
    return <>
      <Nav></Nav>
      <div className={styles.container}>{children}</div>;
    
    </>
  }