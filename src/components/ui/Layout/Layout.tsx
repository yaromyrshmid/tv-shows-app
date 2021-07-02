import React from "react";
import Header from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default Layout;
