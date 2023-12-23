import { Link, useLocation } from "react-router-dom";
import styles from "./Navigator.module.scss";

function NavigatorLocation() {
  const location = useLocation();

  switch (location.pathname) {
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

function Navigator() {
  return (
    <header className={styles.navigator}>
      <div>
        <span>
          <NavigatorLocation />
        </span>
      </div>
    </header>
  );
}

export default Navigator;
