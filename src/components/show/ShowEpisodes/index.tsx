import React, { useMemo } from "react";

import { Episode } from "types";
import Card from "components/ui/Card";
import "./styles.sass";
import { Link } from "react-router-dom";

interface ShowEpisodesProps {
  episodes: Array<Episode>;
  showId: number;
}

interface IEpisodesBySeason {
  [key: string]: Array<Episode>;
}

const ShowEpisodes: React.FC<ShowEpisodesProps> = ({
  episodes,
  showId,
}): JSX.Element => {
  const episodesBySeason = useMemo(
    () =>
      episodes.reduce((acc: IEpisodesBySeason, episode) => {
        const seasonString = `${episode.season}`;

        if (!acc[seasonString]) return { ...acc, [seasonString]: [episode] };

        return { ...acc, [seasonString]: [...acc[seasonString], episode] };
      }, {}),
    [episodes]
  );

  return (
    <div>
      <h2>Episodes</h2>

      {episodesBySeason &&
        Object.keys(episodesBySeason).map((season) => (
          <div key={season}>
            <h3>
              <span className="text-secondary">Season </span>
              {season}
            </h3>

            <div className="episodes-container">
              {episodesBySeason[season].map(
                ({ name, id, image: { medium: image }, number }) => (
                  <Link
                    key={id}
                    to={`/show/${showId}/s/${season}/e/${number}`}
                    className="episode-link"
                  >
                    <Card title={name} key={id} image={image} />
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShowEpisodes;
