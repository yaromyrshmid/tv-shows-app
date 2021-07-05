import React, { Component, ErrorInfo } from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <h1>An error occurred. Good thing that we caught it here...</h1>;
    }

    const { children } = this.props;

    return children;
  }
}

export default ErrorBoundary;
