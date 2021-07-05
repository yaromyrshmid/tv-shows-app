import React, { useEffect } from "react";

import ShowDetails from "components/show/ShowDetails";
import { POWER_PUFF_GIRLS_ID } from "constants/SHOW";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchShowDetails, fetchShowEpisodes } from "store/reducers/show";
import ShowEpisodes from "components/show/ShowEpisodes";
import Spinner from "components/ui/Spinner";

const ShowPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { details, episodes, episodesLoading, loading } = useAppSelector(
    (state) => state.show
  );

  useEffect(() => {
    dispatch(fetchShowDetails(POWER_PUFF_GIRLS_ID));
    dispatch(fetchShowEpisodes(POWER_PUFF_GIRLS_ID));
  }, []);

  if (loading || episodesLoading) return <Spinner />;

  return (
    <>
      {details && <ShowDetails details={details} />}
      {!!episodes.length && details && (
        <ShowEpisodes episodes={episodes} showId={details?.id} />
      )}
    </>
  );
};

export default ShowPage;
