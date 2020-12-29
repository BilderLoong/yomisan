import React from 'react';
import PropTypes from 'prop-types';
import Dictionary from './components/Dictionary';

class PopupDiv extends React.Component {
  static propTypes = {
    entry: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="yomisan-popup">
        <Dictionary entry={this.props.entry} />
      </div>
    );
  }
}

export default PopupDiv;
