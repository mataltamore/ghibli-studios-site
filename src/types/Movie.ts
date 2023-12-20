export type Director =
  | "Hayao Miyazaki"
  | "Isao Takahata"
  | "Tomomi Mochizuki"
  | "Yoshifumi Kondō"
  | "Hiroyuki Morita"
  | "Goro Miyazaki"
  | "Hiromasa Yonebayashi";

export type Movie = {
  title: string;
  year: number;
  director: Director;
};
