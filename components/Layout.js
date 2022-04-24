import Header from "./Header";
import Footer from "./Footer";

import Link from "next/link";
import { useState } from "react";

import styles from "../styles/components/Layout.module.css";

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <Header closeMenu={closeMenu} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>

      <div className={styles.menu} onClick={showMenu}>
        {menu ? <button>close</button> : <button>open</button>}
      </div>

      <div className={menu ? styles.navBarActive : styles.navBar} onClick={showMenu} >
          <nav className={styles.nav}>
            <Link href="/">
              <a>Strona główna</a>
            </Link>

            <Link href="/gallery">
              <a>Geleria</a>
            </Link>

            <Link href="/about-us">
              <a>O nas</a>
            </Link>

            <Link href="/contact">
              <a>Kontakt</a>
            </Link>
          </nav>
        </div>
    </div>
  );
};

export default Layout;
