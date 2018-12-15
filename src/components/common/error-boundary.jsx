import React, { Component } from "react";
import { Alert } from "reactstrap";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      throw new Error("I crashed!");
      return (
        <Alert className="toaster" color="danger">
          Oops, something went wrong
        </Alert>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
