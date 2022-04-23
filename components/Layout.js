import Header from "./Header";
import Footer from "./Footer";

import styles from "../styles/components/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.contentContainer} >
      <div className={styles.content}>
        <Header />

        {children}

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
