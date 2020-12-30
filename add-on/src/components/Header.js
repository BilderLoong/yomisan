import React from 'react';
import PropTypes from 'prop-types';
import Ankiconnect from '../ankiconnect';
import AddNote from './AddNote';

class Header extends React.Component {
  static propTypes = {
    expression: PropTypes.string.isRequired,
    ipa: PropTypes.object,
  };

  #ankiconnect = new Ankiconnect();

  state = {
    isConnecting: false,
  };

  async #getConnectingStatus() {
    const isConnecting = await this.#ankiconnect.isConnecting();
    this.setState({ isConnecting });
  }

  #getIpaString() {
    const ipa = this.props.ipa;
    let ipaString = '';
    for (const i in ipa) {
      ipaString = ipaString.concat(`${i}:${ipa[i]} `);
    }
    return `ipa: ${ipaString}`;
  }

  componentDidMount() {}

  render() {
    this.#getConnectingStatus();
    return (
      <div id="yomisan-header">
        <div className="yomisan-header-expression">{this.props.expression}</div>
        <div className="yomisan-header-ipa">{this.#getIpaString()}</div>
        <AddNote connecting={this.state.isConnecting} />
      </div>
    );
  }
}

export default Header;
