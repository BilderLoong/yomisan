import React from 'react';
import PropTypes from 'prop-types';

class SelectInput {
  static propTypes = {};

  render() {
    return (
      <select name="deck" id="deck-select">
        <option value="test">test</option>
      </select>
    );
  }
}

export default SelectInput;
