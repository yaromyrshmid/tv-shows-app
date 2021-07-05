import React from "react";
import { Link } from "react-router-dom";

import "./styles.sass";

const Header: React.FC = (): JSX.Element => (
  <header>
    <nav>
      <Link to="/" className="logo">
        TV APP
      </Link>
    </nav>
  </header>
);

export default Header;
