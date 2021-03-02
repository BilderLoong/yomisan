import React from 'react';
import PropTypes from 'prop-types';
import AnkiConnect from '../ankiconnect';
import AddNote from './AddNote';

class Header extends React.Component {
  static propTypes = {
    expression: PropTypes.string.isRequired,
    ipa: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      isConnecting: false,
    };
    this.ankiconnect = new AnkiConnect();
  }

  #onClick() {
    console.log(this);
    const note = {
      deckName: 'collecting::Test',
      modelName: 'Basic_root',
      fields: {
        正面: 'hello from yomichan',
      },
      options: {
        allowDuplicate: true,
      },
    };
    const result = this.ankiconnect.addNote(note);
    console.log(result);
  }

  async #getConnectingStatus() {
    const isConnecting = await this.ankiconnect.isConnecting();
    this.setState({ isConnecting });
  }

  #getIpaString() {
    // console.log(`in getIpa: ` + this);
    const ipa = this.props.ipa;
    let ipaString = '';
    for (const i in ipa) {
      ipaString = ipaString.concat(`${i}:${ipa[i]} `);
    }
    return `ipa: ${ipaString}`;
  }

  componentDidMount() {
    this.#getConnectingStatus();
  }

  render() {
    return (
      <div id="yomisan-header">
        <div className="yomisan-header-expression">{this.props.expression}</div>
        <div className="yomisan-header-ipa">{this.#getIpaString()}</div>
        <AddNote
          connecting={this.state.isConnecting}
          onClick={() => this.#onClick()}
        />
      </div>
    );
  }
}

export default Header;
