import "./App.module.scss";
import Filmography from "../Filmography/Filmography";
import Timeline from "../Timeline/Timeline";
import styles from "./App.module.scss";
import Header from "../Header/Header";

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main_wrapper}>
        <main>
          <Filmography />
        </main>

        <aside className={styles.aside}>
          <Timeline />
        </aside>
      </div>

      <footer className={styles.footer}>
        <div>
          <span>
            {new Date().getFullYear()} &copy; Matteo Altamore's Project
          </span>
          <span>"What the Studio Ghibli Website should look like?"</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
