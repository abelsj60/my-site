import React, { Component } from 'react';

class FooterText extends Component {
  constructor(props) {
    super(props);
  }

  addCssToHideTextForAppBar() {
    return this.props.addAppBarToPage() ? 'app-bar-active' : '';
  }

  render() {
    return (
      <section id="footer-text" className={this.addCssToHideTextForAppBar()}>
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
