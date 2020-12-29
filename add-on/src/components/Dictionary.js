import React from 'react';
import PropTypes from 'prop-types';
import Glossary from './Glossary';
import Header from './Header';

class Dictionary extends React.Component {
  static propTypes = {
    entry: PropTypes.object.isRequired,
  };

  getGlossaryList() {
    const glossaryList = this.props.entry.dictionaryEntry.glossaries.map(
      (glossary, index) => <Glossary glossary={glossary} key={index} />
    );
    return glossaryList;
  }

  render() {
    return (
      <div className="yomisan-dictionary">
        <Header
          expression={this.props.entry.expression}
          ipa={this.props.entry.dictionaryEntry.ipa}
        />
        <div className="yomisan-dictionary-glossary-list">
          {this.getGlossaryList()}
        </div>
      </div>
    );
  }
}

export default Dictionary;
