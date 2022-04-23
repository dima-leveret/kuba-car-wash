import Link from "next/link";

import styles from "../styles/components/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header} >
      <Link href="/">
        <a>
          <h2>Kuba | Myjnia samochodów</h2>
        </a>
      </Link>
      <div className={styles.navBar} >
        <nav className={styles.nav}>
          <Link href="/" >
            <a>Strona główna</a>
          </Link>

          <Link href="/gallery" >
            <a>Gelaria mytych samochodów</a>
          </Link>

          <Link href="/about-us" >
            <a>O nas</a>
          </Link>

          <Link href="/contact" >
            <a>Kontakt</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
