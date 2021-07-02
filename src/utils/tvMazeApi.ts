import axios from "axios";

import { Episode, ShowDetails } from "../types";

const axiosInstance = axios.create({
  baseURL: "http://api.tvmaze.com/",
});

export abstract class TVMazeApi {
  static async getShowById(id: string) {
    const { data }: { data: ShowDetails } = await axiosInstance.get(
      `shows/${id}`
    );

    return data;
  }

  static async getEpisodesByShowId(id: string) {
    const { data }: { data: Array<Episode> } = await axiosInstance.get(
      `shows/${id}/episodes`
    );

    return data;
  }
}
