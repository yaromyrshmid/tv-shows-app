import React, { useEffect } from "react";

import { POWER_PUFF_GIRLS_ID } from "../constants/SHOW";
import { useAppDispatch } from "../store/hooks";
import { fetchShowDetails, fetchShowEpisodes } from "../store/reducers/show";

const ShowPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShowDetails(POWER_PUFF_GIRLS_ID));
    dispatch(fetchShowEpisodes(POWER_PUFF_GIRLS_ID));
  }, []);

  return (
    <div>
      <p>show page</p>
    </div>
  );
};

export default ShowPage;
