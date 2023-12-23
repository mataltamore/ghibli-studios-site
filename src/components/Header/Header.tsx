import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Navigator from "../Navigator/Navigator";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <div className={styles.titleWrapper}>
            <Link to="/">
              <div className={styles.iconWrapper}>
                <img src="/favicon.png" alt="SG" />
              </div>
            </Link>
            <h1>~ Studio Ghibli</h1>
          </div>

          <Link to="/filmography">Filmography</Link>
        </div>
      </header>

      <div className={styles.img} />

      <Navigator />
    </>
  );
}

export default Header;
