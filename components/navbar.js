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

    return <nav className={Navcss.Navbar}>
      <Image src="/images/icons8-eye.png" width={400} height={400} className={Navcss.Logo} alt="Eye logo"></Image>
      <Link className={Navcss.Link} href="/">Home</Link>
      <Link className={Navcss.Link} href="/conditions/learn">Conditions</Link>
      <Link className={Navcss.Link} href="/treatments/learn">Treatments</Link>
      <SearchBar></SearchBar>
      <button className={Navcss.Ham}>
          <svg
            className={Navcss.Hamsvg}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
    </nav>
  }