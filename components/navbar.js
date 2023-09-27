import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image'
import Navcss from "../styles/Navbar.module.css"
import SearchBar from './searchbar.js';
import { useState } from 'react';


export default function Navbar({}) {
  const [hamactive, setActive] = useState(false);
  const handlehamClick = () => {
    setActive(!hamactive);
  };

    return <><nav className={Navcss.Navbar}>
      <Image src="/images/icons8-eye.png" width={400} height={400} className={Navcss.Logo} alt="Eye logo"></Image>
      <Link className={Navcss.Link} href="/">Home</Link>
      <Link className={Navcss.Link} href="/conditions/learn">Conditions</Link>
      <Link className={Navcss.Link} href="/treatments/learn">Treatments</Link>
      <SearchBar></SearchBar>
      <button className={Navcss.Ham} onClick={(event) => {handlehamClick()}}>
      <Image src="/images/hamburger.png" width={400} height={400} alt="ham" className={Navcss.Hamsvg}></Image>
      </button>
    </nav>
    {hamactive && <div className={Navcss.hammenu}>
      <Link className={Navcss.hamLink} href="/">Home</Link>
      <Link className={Navcss.hamLink} href="/conditions/learn">Conditions</Link>
      <Link className={Navcss.hamLink} href="/treatments/learn">Treatments</Link></div>}
    </>
  }