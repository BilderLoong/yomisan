import React from 'react';
import PropTypes from 'prop-types';
// import AnkiConnect from '../ankiconnect';

class AddNote extends React.Component {
  static propTypes = {
    connecting: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.connecting)
      return <div className="yomisan-add-note disable">🤠</div>;
    else {
      return <div className="yomisan-add-note">😉</div>;
    }
  }
}

export default AddNote;
