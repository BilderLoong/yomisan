import React from 'react';
// import PropTypes from 'prop-types';

class SelectInput extends React.Component {
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
