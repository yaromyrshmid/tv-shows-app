import axios from "axios";

import { Episode, ShowDetails } from "../types";

const axiosInstance = axios.create({
  baseURL: "http://api.tvmaze.com/",
});

export interface IEpisodeParams {
  showId: string;
  seasonNumber: string;
  episodeNumber: string;
}

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

  static async getEpisode({
    showId,
    seasonNumber,
    episodeNumber,
  }: IEpisodeParams) {
    const { data }: { data: Episode } = await axiosInstance.get(
      `/shows/${showId}/episodebynumber?season=${seasonNumber}&number=${episodeNumber}`
    );

    return data;
  }
}
