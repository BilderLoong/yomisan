import SelectInput from './components/SelectInput';
import React from 'react';
import AnkiConnect from '../ankiconnect';

class Options extends React.Component {
  static propTypes = {};
  state = { deckList: null, modelList: null };
  ankiConnect = new AnkiConnect();
  deckOptionsList;
  modelOptionsList;

  handleSelectChange(selectName) {}

  componentDidMount() {
    this.getInfo();
  }
  async getInfo() {
    const deckList = await this.ankiConnect.getDeckList();
    const modelList = await this.ankiConnect.getModelList();
    this.setState({
      deckList,
      modelList,
    });
  }

  render() {
    return (
      <form>
        <SelectInput
          name="DeckName"
          id="deck-select"
          onSelect={this.handleSelectChange('DeckName')}
          optionsList={this.deckList}
        />
        <SelectInput
          name="ModelName"
          id="model-select"
          onSelect={this.handleSelectChange('ModelName')}
          optionsList={this.modelList}
        />
      </form>
    );
  }
}

export default Options;
