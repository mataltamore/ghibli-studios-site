import MOVIE_LIST from "../../assets/movies.json";
import DIRECTOR_LIST from "../../assets/directors.json";
import styles from "./Filmography.module.scss";
import { Director } from "../../types/Movie";
import { useState } from "react";
import { getDirectorColor } from "../../utils/getDirectorColor";

function MoviesByDirectorComponent(props: {
  directors: {
    name: string;
    color: string;
  }[];
}) {
  const { directors } = props;

  return (
    <div className={styles.movie_list}>
      {MOVIE_LIST.filter((movie) =>
        directors.find((director) => director.name === movie.director)
      ).map((movie) => {
        const { title, year, director, image } = movie;
        const color = getDirectorColor(director as Director);

        return (
          <article className={styles.article}>
            <img
              src={`/images/movies/${image}`}
              alt={`${title}' theatrical release poster`}
            />

            <div>
              <h4>
                <span style={{ backgroundColor: color }}>{year}</span>
                {director}
              </h4>
            </div>

            <a href={`https://www.google.com/search?q=${title}`}>
              <h3>{title}</h3>
            </a>
          </article>
        );
      })}
    </div>
  );
}

function DirectorsNavbarComponent(props: {
  directors: {
    name: string;
    color: string;
  }[];
  setDirectors: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        color: string;
      }[]
    >
  >;
}) {
  const { directors, setDirectors } = props;

  return (
    <nav className={styles.navbar}>
      <ul>
        {DIRECTOR_LIST.map((director) => {
          const { name, color } = director;

          const directorFound = directors.find(
            (director) => director.name === name
          );

          return (
            <li>
              <button
                type="button"
                className={styles.button}
                style={{
                  backgroundColor: color || "white",
                  opacity: directorFound ? "1" : "0.5",
                }}
                onClick={() => {
                  if (directors.length === DIRECTOR_LIST.length)
                    return setDirectors([director]);

                  if (directorFound && directors.length === 1)
                    setDirectors(DIRECTOR_LIST);

                  if (!directorFound)
                    return setDirectors((prev) => [...prev, director]);

                  if (directorFound && directors.length > 1)
                    return setDirectors((prev) =>
                      prev.filter(
                        (director) => director.name !== directorFound.name
                      )
                    );
                }}>
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Filmography() {
  const [directors, setDirectors] = useState(DIRECTOR_LIST);

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Filmography</h2>
        <p>
          The list of all Studio Ghibli movies, you can also filter by director.
        </p>
      </div>

      <DirectorsNavbarComponent {...{ directors, setDirectors }} />

      <MoviesByDirectorComponent directors={directors} />
    </section>
  );
}

export default Filmography;
