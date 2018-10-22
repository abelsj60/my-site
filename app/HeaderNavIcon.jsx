import React, { Component } from 'react';

class HeaderNavIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section
        id="nav-icon"
        onClick={() => {
          this.props.toggleHeaderMenu();
          this.props.closeHeaderMenuViaSetTimeout();
        }}
      />
    );
  }
}

export default HeaderNavIcon;
