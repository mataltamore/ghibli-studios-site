import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

function NavigatorLocation({ pathname }: { pathname: string }) {
  switch (pathname) {
    case "/":
      return <Link to="/">Home</Link>;
    case "/filmography":
      return (
        <>
          <Link to="/">Home</Link>\<Link to="/filmography">Filmography</Link>
        </>
      );
    default:
      return "";
  }
}

function Navigator({ pathname }: { pathname: string }) {
  return (
    <header className={styles.navigator}>
      <div>
        <span>
          <NavigatorLocation pathname={pathname} />
        </span>
      </div>
    </header>
  );
}

function Header() {
  const location = useLocation();

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

      <div
        className={styles.img}
        style={{
          backgroundImage:
            location.pathname === "/"
              ? "url('/images/navbar-2.jpg')"
              : "url('/images/park.jpg')",
        }}
      />

      <Navigator pathname={location.pathname} />
    </>
  );
}

export default Header;
