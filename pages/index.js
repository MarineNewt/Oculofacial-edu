import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Nav from '../components/navbar.js'

export default function Home() {
  return (<>
    <Nav></Nav>
    <div className={styles.container}>
      <Head>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <title>Oculoplastics Learning Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.titleBox}><h1 className={styles.title}>Oculoplastics Learning Center.</h1></div>
      <div className={styles.homeSectionsContainer}>
        <div className={styles.homeSectionsArea}>
        <Link className={styles.none} href="/conditions/learn">
          <div className={styles.imageFade}></div>
          <Image className={styles.sectionBoxImage}
          src="/images/homeconditionsimage.jpg" // Route of the image file
          height={360} // Desired size with correct aspect ratio
          width={640} // Desired size with correct aspect ratio
          alt="Conditions"
          />
          <div className={styles.sectionBoxText}>Identify conditions and explore details behind a diagnosis.</div>
        </Link>
        </div> 
        <Image className={styles.homeSectionsImage}
        src="/images/Eyes.jpg" // Route of the image file
        height={256} // Desired size with correct aspect ratio
        width={384} // Desired size with correct aspect ratio
        alt="Eyes"
        />
        <div className={styles.homeSectionsArea}>
        <Link className={styles.none} href="/treatments/learn">
          <div className={styles.imageFade}></div>
          <Image className={styles.sectionBoxImage}
            src="/images/hometreatmentimage.jpg" // Route of the image file
            height={360} // Desired size with correct aspect ratio
            width={640} // Desired size with correct aspect ratio
            alt="Treatments"
          />
          <div className={styles.sectionBoxText}>Reimagine a new look and explore your options with modern treatments.</div>
        </Link>
        </div> 
      </div>
      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Oculoplastics Learning Center 2023
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with Vercel.
        </a>
        <a
          href="https://icons8.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Icons supported by Icons8.
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  </>
  )
}
