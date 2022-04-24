import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/Header.module.css"

const Header = ({ closeMenu }) => {
  return (
    <header className={styles.header} >
      <Link href="/" >
        <a className={styles.logo} onClick={closeMenu} >
          <Image 
            src="/car-wash-logo.jpg" 
            width={200}
            height={200}
          />
        </a>
      </Link>

      <div className={styles.navBar} >
        <nav className={styles.nav}>
          <Link href="/" >
            <a>Strona główna</a>
          </Link>

          <Link href="/gallery" >
            <a>Geleria</a>
          </Link>

          <Link href="/about-us" >
            <a>O nas</a>
          </Link>

          <Link href="/contact" >
            <a>Kontakt</a>
          </Link>
        </nav>
      </div>

      {/* <div className={styles.menu} > 
        <button>Rozwiń</button>
      </div> */}

    </header>
  );
};

export default Header;
