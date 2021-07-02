import axios from "axios";
import { ShowDetails } from "../types/ShowDetails";

const axiosInstance = axios.create({
  baseURL: "http://api.tvmaze.com/",
});

const POWER_PUFF_GIRLS_IMDB_ID = "tt0175058";

export abstract class TVMazeApi {
  static async getShowByIMDBId(id: string = POWER_PUFF_GIRLS_IMDB_ID) {
    const { data }: { data: ShowDetails } = await axiosInstance.get(
      `lookup/shows?imdb=${id}`
    );

    return data;
  }
}
