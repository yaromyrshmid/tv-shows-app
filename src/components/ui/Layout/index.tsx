import React from "react";

import ErrorBoundary from "components/ErrorBoundry";
import ErrorSnackbar from "../ErrorSnackbar";
import Header from "../Header";
import "./styles.sass";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
  <>
    <Header />

    <div className="layout-container">
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>

    <ErrorSnackbar />
  </>
);

export default Layout;
