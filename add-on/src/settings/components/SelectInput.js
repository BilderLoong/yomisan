import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    optionsList: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <select name={this.props.name} id={this.props.id}>
        {this.props.optionsList}
      </select>
    );
  }
}

export default SelectInput;
