import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = (): JSX.Element => (
  <header>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;
