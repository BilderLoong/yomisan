import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    expression: PropTypes.string.isRequired,
    ipa: PropTypes.object,
  };
  getIpaString() {
    const ipa = this.props.ipa;
    let ipaString = '';
    for (const i in ipa) {
      ipaString = ipaString.concat(`${i}:${ipa[i]} `);
    }
    return `ipa: ${ipaString}`;
  }
  render() {
    return (
      <div id="yomisan-header">
        <div className="yomisan-header-expression">{this.props.expression}</div>
        <div className="yomisan-header-ipa">{this.getIpaString()}</div>
      </div>
    );
  }
}

export default Header;
