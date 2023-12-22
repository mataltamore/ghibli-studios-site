import "./App.module.scss";
import Filmography from "../Filmography/Filmography";
import Timeline from "../Timeline/Timeline";
import styles from "./App.module.scss";
import Header from "../Header/Header";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>

      <main className={styles.main}>
        <Filmography />
      </main>

      <aside className={styles.aside}>
        <Timeline />
      </aside>
    </div>
  );
}

export default App;
