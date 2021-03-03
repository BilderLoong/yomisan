import React from 'react';
// import PropTypes from 'prop-types';
import AnkiConnect from '../../ankiconnect';
import SelectOption from './SelectOption';

class SelectInput extends React.Component {
  static propTypes = {};
  state = {};
  ankiConnect = new AnkiConnect();
  optionList;

  async getDeck() {
    const deckList = await this.ankiConnect.getDeckList();
    this.setState({
      deckList,
    });
  }

  componentDidMount() {
    this.getDeck();
  }

  render() {
    if (this.state.deckList) {
      this.optionList = this.state.deckList.map((e, i) => (
        <SelectOption value={e} key={i} />
      ));
    } else {
      this.optionList = <SelectOption value={`Can't get the deck list`} />;
    }
    return (
      <select name="deck" id="deck-select">
        {this.optionList}
      </select>
    );
  }
}

export default SelectInput;
