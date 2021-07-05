import React from "react";

import "./styles.sass";

const Spinner: React.FC = (): JSX.Element => (
  <div className="spinner">
    <span className="spinner-inner-1" />
    <span className="spinner-inner-2" />
    <span className="spinner-inner-3" />
  </div>
);

export default Spinner;
