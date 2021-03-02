import React from 'react';
import PropTypes from 'prop-types';

class SelectOption extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  render() {
    return <option value={this.props.value}>{this.props.value}</option>;
  }
}

export default SelectOption;
