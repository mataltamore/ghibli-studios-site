import { ReactNode } from "react";
import styles from "./Layout.module.scss";

import Timeline from "../Timeline/Timeline";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main_wrapper}>
        <main>{children}</main>

        <aside className={styles.aside}>
          <Timeline />
        </aside>
      </div>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
