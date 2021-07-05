import { configureStore } from "@reduxjs/toolkit";
import { mock } from "jest-mock-extended";
import moxios from "moxios";

import { Episode } from "types";
import { IEpisodeParams } from "utils/tvMazeApi";
import reducer, {
  clearEpisodeDetails,
  fetchEpisodeDetails,
  setEpisodeDetails,
  setEpisodeError,
  setEpisodeLoading,
} from "./episode";

const testStore = configureStore({
  reducer: {
    episode: reducer,
  },
});

describe("Episode reducer", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, { type: "default" })).toEqual({
      details: null,
      loading: false,
      error: "",
    });
  });

  test("Should set episode loading", () => {
    expect(reducer(undefined, setEpisodeLoading())).toEqual({
      details: null,
      loading: true,
      error: "",
    });
  });

  test("Should set episode details and set loading to false", () => {
    const mockEpisode = mock<Episode>();

    expect(reducer(undefined, setEpisodeDetails(mockEpisode))).toEqual({
      details: mockEpisode,
      loading: false,
      error: "",
    });
  });

  test("Should set episode error", () => {
    const testError = "Test error";

    expect(reducer(undefined, setEpisodeError(testError))).toEqual({
      details: null,
      loading: false,
      error: testError,
    });
  });

  test("Should clear episode state", () => {
    expect(reducer(undefined, clearEpisodeDetails())).toEqual({
      details: null,
      loading: false,
      error: "",
    });
  });

  test("Should updated state with fetched episodes", () => {
    moxios.install();

    const mockEpisode = mock<Episode>();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: mockEpisode,
      });
    });

    const mockEpisodeParams = mock<IEpisodeParams>();

    testStore.dispatch(fetchEpisodeDetails(mockEpisodeParams)).then(() => {
      const newState = testStore.getState();
      expect(newState).toEqual({
        episode: {
          details: mockEpisode,
          loading: false,
          error: "",
        },
      });

      moxios.uninstall();
    });
  });

  test("Should updated state with error if feching episode failed", () => {
    moxios.install();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 500,
      });
    });

    const mockEpisodeParams = mock<IEpisodeParams>();

    testStore
      .dispatch(fetchEpisodeDetails(mockEpisodeParams))
      .catch((error) => {
        const newState = testStore.getState();

        expect(newState).toEqual({
          episode: {
            details: null,
            loading: false,
            error: error.message,
          },
        });

        moxios.uninstall();
      });
  });
});
