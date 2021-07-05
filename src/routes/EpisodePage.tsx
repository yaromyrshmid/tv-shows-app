import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import EpisodeDetails from "components/episode/EpisodeDetails";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchEpisodeDetails } from "store/reducers/episode";
import { IEpisodeParams } from "utils/tvMazeApi";
import Spinner from "components/ui/Spinner";

const EpisodePage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const episodeParams = useParams<IEpisodeParams>();
  const { details, loading } = useAppSelector((state) => state.episode);

  useEffect(() => {
    dispatch(fetchEpisodeDetails(episodeParams));
  }, [episodeParams]);

  if (loading) return <Spinner />;

  return <>{details && <EpisodeDetails details={details} />}</>;
};

export default EpisodePage;
