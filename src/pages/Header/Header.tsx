import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src="/favicon.png" alt="SG" />
        </div>
        <h1>~ Studio Ghibli</h1>
      </header>

      <div className={styles.img} />

      <header className={styles.navigator}>
        <span>Home \ Filmography</span>
      </header>
    </>
  );
}

export default Header;
