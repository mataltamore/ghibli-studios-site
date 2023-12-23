import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <span>{new Date().getFullYear()} &copy; Matteo Altamore's Project</span>
      <span>"What the Studio Ghibli Website should look like?"</span>
    </div>
  );
}

export default Footer;
