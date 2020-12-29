import React from 'react';
import PropTypes from 'prop-types';

class Example extends React.Component {
  static propTypes = {
    exampleSentence: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className="yomisan-glossary-example">{this.props.exampleSentence}</div>
    );
  }
}

export default Example;
