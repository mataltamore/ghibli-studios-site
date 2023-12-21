import "./App.module.scss";
import Filmography from "../Filmography/Filmography";
import Timeline from "../Timeline/Timeline";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Studio Ghibli</header>
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
