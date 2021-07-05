import { TVMazeImage } from "./TVMazeImage";

export type Episode = {
  airdate: string;
  id: number;
  image: TVMazeImage;
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
};
