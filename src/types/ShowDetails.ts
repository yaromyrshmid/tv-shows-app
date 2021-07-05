import { TVMazeImage } from "./TVMazeImage";

export type ShowDetails = {
  averageRuntime: number;
  genres: Array<string>;
  id: number;
  image: TVMazeImage;
  language: string;
  name: string;
  premiered: string;
  network: {
    id: number;
    name: string;
  };
  rating: { average: number };
  runtime: string;
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
};
