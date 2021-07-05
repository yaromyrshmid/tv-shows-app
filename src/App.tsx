import React from "react";
import { Provider } from "react-redux";

import Routes from "./routes/Routes";
import store from "./store/store";

const App: React.FC = (): JSX.Element => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
