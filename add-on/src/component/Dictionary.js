import React from 'react';
import PropTypes from 'prop-types';
import Glossary from './Glossary';

class Dictionary extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className="yomisan-dictionary">
        <Glossary />
        <Glossary/>
        <Glossary/>
        <Glossary/>
      </div>
    );
  }
}

export default Dictionary;
