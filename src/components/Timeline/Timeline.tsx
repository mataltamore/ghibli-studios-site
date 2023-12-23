import styles from "./Timeline.module.scss";
import MOVIE_LIST from "../../assets/movies.json";
import { getDirectorColor } from "../../utils/getDirectorColor";
import { Director } from "../../types/Movie";

function Timeline() {
  return (
    <section className={styles.container}>
      {MOVIE_LIST.sort((a, b) => b.year - a.year).map((movie) => {
        const { title, year, director } = movie;
        const color = getDirectorColor(director as Director);

        return (
          <div className={styles.wrapper} key={title}>
            {title}
            <span style={{ backgroundColor: color }}>{year}</span>
          </div>
        );
      })}
    </section>
  );
}

export default Timeline;
