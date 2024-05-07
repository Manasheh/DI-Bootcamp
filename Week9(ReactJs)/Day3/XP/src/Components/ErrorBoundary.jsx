import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: null,
      errorInfo: null // Add errorInfo property to state
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: error, errorInfo: info }); // Store error and info in state
  }

  render() {
    if(this.state.hasError) {
       return (
        <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.hasError.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </details>
        </div>
       )
    }
    return this.props.children;
}

  
}

export default ErrorBoundary;
