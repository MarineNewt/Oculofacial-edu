import styles from '../styles/PageLayout.module.css';
import utilStyles from '../styles/utils.module.css';
import Nav from './navbar.js'
import Sidebar from './sidebar.js'
import { useState } from 'react';

export default function ConditionLayout({ name, current, children }) {
const [sbactive, setActive] = useState(false);
const sbiconClick = () => {
  setActive(!sbactive);
};
  return <>
    <Nav></Nav>
    <div className={styles.wrapper}>
      <button className={styles.mobilesbbtn} style={{marginLeft: sbactive ? "50%" : "0"}} onClick={(event) => {sbiconClick()}}></button>
      <div className={styles.sidebar}><Sidebar current={current}></Sidebar></div>
      <div className={styles.mobilesidebar} style={{display: sbactive ? "block" : "none"}}><Sidebar current={current}></Sidebar></div>
      <div className={styles.content}>{children}</div>
      <div className={styles.additionals}>extra content</div>
    </div>
  </>
}