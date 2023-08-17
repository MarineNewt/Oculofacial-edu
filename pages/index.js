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
        <title>Oculoplastics Learning Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.titleBox}><h1 className={styles.title}h1>Oculoplastics Learning Center.</h1></div>
      <div className={styles.homeSectionsBox}>
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
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with love... & Vercel.
        </a>
        {/*Add icons8.com*/}
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
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
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
