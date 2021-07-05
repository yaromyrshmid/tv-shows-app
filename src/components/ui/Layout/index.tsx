import React from "react";

import Header from "../Header";
import "./styles.sass";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
  <>
    <Header />
    <div className="layout-container">{children}</div>
  </>
);

export default Layout;
