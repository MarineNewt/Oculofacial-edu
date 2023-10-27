import Image from 'next/image';
import icon from '../public/images/icons8-printer.png';
import styles from '../styles/Home.module.css';

export default function printpage() {
  function printer(){
    var originalContents = document.body.innerHTML;
    var printContents = document.getElementById("primaryContent").innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    setTimeout(function() {
      document.body.innerHTML = originalContents;
    }, 500);
  }
  return <>
    <button onClick={printer} className={styles.none} style={{}}><Image style={{border: "1px solid black", borderRadius: "5px", cursor: "pointer", height: "1.5em", width: "1.5em"}}
          src={icon} // Route of the image file
          height={100} // Desired size with correct aspect ratio
          width={100} // Desired size with correct aspect ratio
          alt="Conditions"
          /></button>
  </>
}