import React, { useEffect } from "react";

import ShowDetails from "components/show/ShowDetails";
import { POWER_PUFF_GIRLS_ID } from "constants/SHOW";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchShowDetails, fetchShowEpisodes } from "store/reducers/show";

const ShowPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { details } = useAppSelector((state) => state.show);

  useEffect(() => {
    dispatch(fetchShowDetails(POWER_PUFF_GIRLS_ID));
    dispatch(fetchShowEpisodes(POWER_PUFF_GIRLS_ID));
  }, []);

  console.log(details);

  return <>{details && <ShowDetails details={details} />}</>;
};

export default ShowPage;
