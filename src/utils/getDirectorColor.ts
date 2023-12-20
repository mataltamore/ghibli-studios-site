import DIRECTOR_LIST from "../assets/directors.json";
import { Director } from "../types/Movie";

export const getDirectorColor = (director: Director) => {
  const directorFound = DIRECTOR_LIST.find((dir) => dir.name === director);
  if (directorFound) return directorFound.color;
  return "white";
};
