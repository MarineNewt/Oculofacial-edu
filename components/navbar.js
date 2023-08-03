import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navcss from "../styles/Navbar.module.css"

export default function Navbar({}) {
    return <div className={Navcss.Navbar}>

      <Link href="/">Home</Link>
      <Link href="/conditions/learn">Conditions</Link>
      <Link href="/treatments/learn">Treatments</Link>
    
    </div>
  }