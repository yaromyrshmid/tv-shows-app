import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/ui/Layout";
import ShowPage from "./ShowPage";
import EpisodePage from "./EpisodePage";
import NotFoundPage from "./NotFoundPage";

const Routes: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/show/:showId/s/:seasonNumber/e/:episodeNumber">
          <EpisodePage />
        </Route>
        <Route exact path="/">
          <ShowPage />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
