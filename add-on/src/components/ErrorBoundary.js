import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      gotError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(`the info of component stack: ${info.componentStack}`);
    console.log(`got error: ${error}`);
    // logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
