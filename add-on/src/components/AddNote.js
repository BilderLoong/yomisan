import React from 'react';
import PropTypes from 'prop-types';

class AddNote extends React.Component {
  static propTypes = {
    connecting: PropTypes.bool.isRequired,
    onClick: PropTypes.func
  };

  render() {
    if (!this.props.connecting)
      return <div className="yomisan-add-note disable">🤠</div>;
    else {
      return <div className="yomisan-add-note" onClick={this.props.onClick}>😉</div>;
    }
  }
}

export default AddNote;
