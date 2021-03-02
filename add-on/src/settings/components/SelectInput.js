import React from 'react';
// import PropTypes from 'prop-types';
import AnkiConnect from '../../ankiconnect';
import SelectOption from './SelectOption';

class SelectInput extends React.Component {
  static propTypes = {};
  ankiConnect = new AnkiConnect();
  state = { deckList: this.ankiConnect.getDeckList() };

  render() {
    let optionList = [];
    if (this.state.deckList.length > 0) {
      optionList = this.state.deckList.map((e, i) => (
        <SelectOption value={e} key={i} />
      ));
    } else {
      optionList = <SelectOption value={`Can't get the deck list`} />;
    }
    return (
      <select name="deck" id="deck-select">
        {optionList}
      </select>
    );
  }
}

export default SelectInput;
