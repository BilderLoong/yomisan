import React from 'react';
import PropTypes from 'prop-types';
import SelectOptions from './SelectOptions';

class SelectInput extends React.Component {
  /* This component has three states:
  Loading, successful, error, disconnect 
  */
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    optionsList: PropTypes.array,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  getSelectOptionsList(list) {
    if (list) {
      return list.map((e, i) => <SelectOptions value={e} key={i} />);
    } else {
      return <SelectOptions value={`Can't get the deck list`} />;
    }
  }

  render() {
    return (
      <select name={this.props.name} id={this.props.id}>
        {this.getSelectOptionsList(this.props.optionsList)}
      </select>
    );
  }
}

export default SelectInput;
