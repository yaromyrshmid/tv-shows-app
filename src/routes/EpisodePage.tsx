import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IEpisodeParams } from "../utils/tvMazeApi";

import { useAppDispatch } from "../store/hooks";
import { fetchEpisodeDetails } from "../store/reducers/episode";

const EpisodePage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const episodeParams = useParams<IEpisodeParams>();

  useEffect(() => {
    dispatch(fetchEpisodeDetails(episodeParams));
  }, [episodeParams]);

  return (
    <div>
      <p>Episode page</p>
    </div>
  );
};

export default EpisodePage;
