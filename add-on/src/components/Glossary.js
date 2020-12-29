import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Definition from './Definition';

class Glossary extends React.Component {
  static propTypes = {
    glossary: PropTypes.object.isRequired,
  };

  getExample() {
    const exampleList = this.props.glossary.example.map((sentence, index) => (
      <Example exampleSentence={sentence} key={index} />
    ));
    return exampleList;
  }

  render() {
    return (
      <div className="yomisan-popup-glossary">
        <Definition
          tag={this.props.glossary.definition.tag}
          definitionSentence={this.props.glossary.definition.english}
        />
        <div className="yomisan-glossary-example-list">{this.getExample()}</div>
      </div>
    );
  }
}

export default Glossary;
