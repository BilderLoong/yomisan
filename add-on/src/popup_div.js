import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
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
        <Header expression={this.props.entry.expression} />
        <Dictionary name="dictionary" />
      </div>
    );
  }
}

export default PopupDiv;
