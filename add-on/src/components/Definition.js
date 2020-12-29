import React from 'react';
import PropTypes from 'prop-types';

class Definition extends React.Component {
  static propTypes = {
    tag: PropTypes.string,
    definitionSentence: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className="yomisan-popup-glossary">
        <span className="yomisan-glossary-tag">{this.props.tag}</span>
        <div className="yomisan-glossary-definition">
          {this.props.definitionSentence}
        </div>
      </div>
    );
  }
}

export default Definition;
