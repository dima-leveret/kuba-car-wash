import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/components/Header.module.css";

const Header = () => {

  const [isNavBarCtive, setIsNavBarActive] = useState(false);

  const openNavBar = () => {
    setIsNavBarActive(!isNavBarCtive)
  }

  const closeNavBar = () => {
    setIsNavBarActive(false)
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo} onClick={closeNavBar}>
          <Image src="/car-wash-logo.jpg" width={300} height={300} />
        </a>
      </Link>

      <div className={isNavBarCtive ? styles.navBarActive : styles.navBar} onClick={closeNavBar}>
        <nav className={styles.nav}>
          <Link href="/">
            <a>Strona główna</a>
          </Link>

          <Link href="/price-list">
            <a>Cennik usług</a>
          </Link>

          <Link href="/about-us">
            <a>O nas</a>
          </Link>

          <Link href="/gallery">
            <a>Geleria</a>
          </Link>

          <Link href="/contact">
            <a>Kontakt</a>
          </Link>
        </nav>
      </div>

      <div onClick={openNavBar} className={styles.menu} >
        { isNavBarCtive ?  <button>Zwiń</button> : <button>Rozwiń</button>}
      </div>
    </header>
  );
};

export default Header;
