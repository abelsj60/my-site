import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBarMenu from './AppBarMenu.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactInfo: 'hide'
    };

    this.toggleContactInfo = this.toggleContactInfo.bind(this);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  locateFooter() {
    return this.location[1] !== '' ? 'inner-page-footer' : 'home-page-footer';
  }

  addAppBarToPage() {
    return (
      this.location[1] !== '' &&
      this.location[1] !== 'index' &&
      this.location[1] !== 'about'
    );
  }

  getCssToHideFooterTextForAppBar() {
    return this.addAppBarToPage() ? 'hide' : 'show';
  }

  toggleContactInfo() {
    this.setState({
      contactInfo: this.state.contactInfo === 'hide' ? 'show' : 'hide'
    });
  }

  render() {
    return (
      <footer className={this.locateFooter()}>
        <div id="contact-container" className={this.state.contactInfo}>
          <div id="contact-content">
            <p>917-854-7848</p>
            <p>abelsj60_AT_gmail.com</p>
          </div>
        </div>
        <p
          className={`contact-info ${this.getCssToHideFooterTextForAppBar()}`}
          onClick={event => {
            this.toggleContactInfo();
            event.preventDefault();
          }}
        >
          Contact
        </p>
        <p className={`contact-info ${this.getCssToHideFooterTextForAppBar()}`}>
          |
        </p>
        <p className={`copyright ${this.getCssToHideFooterTextForAppBar()}`}>
          James Abels. All rights reserved. 2018.
        </p>
        {this.addAppBarToPage() && (
          <AppBarMenu
            toggleText={this.props.toggleText}
            toggleDetails={this.props.toggleDetails}
            toggleContactInfo={this.toggleContactInfo}
          />
        )}
      </footer>
    );
  }
}

export default withRouter(Footer);
