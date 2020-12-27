import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    expression: PropTypes.string.isRequired,
  };

  render() {
    return <div id="yomisan-header">{this.props.expression}</div>;
  }
}

export default Header
