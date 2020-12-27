import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Dictionary from 'components/Dictionary';

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
        <Header />
        <Dictionary name="dictionary name" />
      </div>
    );
  }
}

export default PopupDiv;
