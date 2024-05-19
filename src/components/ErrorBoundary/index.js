import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.props.history.push('/404');
  }

  render() {
    if (this.state.hasError) {
      return null; // Render nothing or a fallback UI if desired
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
