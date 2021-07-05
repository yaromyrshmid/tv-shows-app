import React from "react";

import { Episode } from "types";
import "./styles.sass";

interface EpisodeDetailsProps {
  details: Episode;
}

const EpisodeDetails: React.FC<EpisodeDetailsProps> = ({
  details: {
    name,
    image: { medium: image },
    summary,
  },
}): JSX.Element => (
  <div className="episode-content">
    <h1>{name}</h1>

    <hr className="divider" />

    <div className="episode-content-secondary">
      <img src={image} alt={`${name} cover`} className="cover" />

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: summary }} className="summary" />
    </div>
  </div>
);

export default EpisodeDetails;
