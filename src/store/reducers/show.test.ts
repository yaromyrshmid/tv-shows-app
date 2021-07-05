import { mock } from "jest-mock-extended";
import moxios from "moxios";

import { Episode, ShowDetails } from "types";
import reducer, {
  setShowLoading,
  setShowDetails,
  setHideLoading,
  setEpisodesLoading,
  setEpisodes,
} from "./show";

describe("Show reducer", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Should return the initial state", () => {
    expect(reducer(undefined, { type: "default" })).toEqual({
      details: null,
      episodes: [],
      loading: false,
      episodesLoading: false,
    });
  });

  test("Should set show loading", () => {
    expect(reducer(undefined, setShowLoading())).toEqual({
      details: null,
      episodes: [],
      loading: true,
      episodesLoading: false,
    });
  });

  test("Should set show episodes loading", () => {
    expect(reducer(undefined, setEpisodesLoading())).toEqual({
      details: null,
      episodes: [],
      loading: false,
      episodesLoading: true,
    });
  });

  test("Should set show details and set loading to false", () => {
    const mockShowDetails = mock<ShowDetails>();

    expect(reducer(undefined, setShowDetails(mockShowDetails))).toEqual({
      details: mockShowDetails,
      episodes: [],
      loading: false,
      episodesLoading: false,
    });
  });

  test("Should set show episodes and set episodes loading to false", () => {
    const mockEpisodes = new Array(5).fill(mock<Episode>());

    expect(reducer(undefined, setEpisodes(mockEpisodes))).toEqual({
      details: null,
      episodes: mockEpisodes,
      loading: false,
      episodesLoading: false,
    });
  });

  test("Should set loading to false", () => {
    expect(reducer(undefined, setHideLoading())).toEqual({
      details: null,
      episodes: [],
      loading: false,
      episodesLoading: false,
    });
  });
});
