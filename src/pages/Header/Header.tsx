import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <div className={styles.iconWrapper}>
            <img src="/favicon.png" alt="SG" />
          </div>
          <h1>~ Studio Ghibli</h1>
        </div>
      </header>

      <div className={styles.img} />

      <header className={styles.navigator}>
        <div>
          <span>Home \ Filmography</span>
        </div>
      </header>
    </>
  );
}

export default Header;
