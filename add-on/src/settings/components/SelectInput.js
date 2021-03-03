import React from 'react';
// import PropTypes from 'prop-types';
import AnkiConnect from '../../ankiconnect';
import SelectOption from './SelectOption';

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.getOptionList();
    this.getInfo();
  }

  static propTypes = {};
  state = {};
  ankiConnect = new AnkiConnect();
  deckOptionList;
  modelOptionList;

  async getInfo() {
    const deckList = await this.ankiConnect.getDeckList();
    const modelList = await this.ankiConnect.getModelList();
    this.setState({
      deckList,
      modelList,
    });
  }

  getOptionList(list) {
    if (list) {
      return list.map((e, i) => <SelectOption value={e} key={i} />);
    } else {
      return <SelectOption value={`Can't get the deck list`} />;
    }
  }

  render() {
    this.deckOptionList = this.getOptionList(this.state.deckList);
    this.modelOptionList = this.getOptionList(this.state.modelList);
    return (
      <div>
        <select name="deck" id="deck-select">
          {this.deckOptionList}
        </select>
        <select name="model" id="model-select">
          {this.modelOptionList}
        </select>
      </div>
    );
  }
}

export default SelectInput;
