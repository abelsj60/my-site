import React, { Component } from 'react';

class FooterText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section
        id="footer-text"
        className={this.props.cssToHideFooterTextForAppBar}
      >
        <p
          onClick={event => {
            this.props.toggleBusinessCard();
            event.preventDefault();
          }}
        >
          Contact
        </p>
        <p>|</p>
        <p>James Abels. All rights reserved. 2018.</p>
      </section>
    );
  }
}

export default FooterText;
