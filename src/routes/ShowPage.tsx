import React, { useEffect } from "react";

import { useAppDispatch } from "../store/hooks";
import { fetchShowDetails } from "../store/reducers/show";

const ShowPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShowDetails());
  }, []);

  return (
    <div>
      <p>show page</p>
    </div>
  );
};

export default ShowPage;
