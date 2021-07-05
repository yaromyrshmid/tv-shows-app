import React from "react";

import Chip from "components/ui/Chip";
import { ShowDetails } from "types";
import "./styles.sass";

interface ShowDetailsProps {
  details: ShowDetails;
}

const ShowDetailsComponent: React.FC<ShowDetailsProps> = ({
  details: {
    name,
    network: { name: networkName },
    premiered,
    genres,
    status,
    image: { medium: image },
    summary,
  },
}): JSX.Element => (
  <div className="show-content">
    <div className="show-content-primary">
      <div>
        <h1>{name}</h1>
        <div className="genre-container">
          {genres.map((genre) => (
            <Chip key={genre}>{genre}</Chip>
          ))}
        </div>
      </div>

      <div className="info-container">
        <h3>
          <span className="text-secondary">Network: </span>
          {networkName}
        </h3>

        <h5>
          <span className="text-secondary">Primered: </span>
          {new Date(premiered).getFullYear()}
        </h5>
        <h5>
          <span className="text-secondary">Status: </span>
          {status}
        </h5>
      </div>
    </div>

    <hr className="divider" />

    <div className="show-content-secondary">
      <img src={image} alt={`${name} cover`} className="cover" />

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: summary }} className="summary" />
    </div>

    <hr className="divider" />
  </div>
);

export default ShowDetailsComponent;
