import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/ui/Layout/Layout";
import ShowPage from "./ShowPage";

const Routes: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/users">{/* <EpisidePage /> */}</Route>
        <Route path="/">
          <ShowPage />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
