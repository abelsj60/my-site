import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBarMenu from './AppBarMenu.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactInfo: false
    };

    this.toggleContactInfo = this.toggleContactInfo.bind(this);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  get innerPage() {
    // ~ja ? Will this work in deployment?
    return this.location[1] !== '';
  }

  get indexPage() {
    return this.location[1] === 'index';
  }

  get aboutPage() {
    return this.location[1] === 'about';
  }

  setFooterClass() {
    return this.innerPage ? 'inner-page-footer' : 'home-page-footer';
  }

  showAppBar() {
    return this.innerPage && !this.indexPage && !this.aboutPage;
  }

  setContactClass() {
    return this.showAppBar() ? 'hide' : 'show';
  }

  toggleContactInfo() {
    this.setState({ contactInfo: !this.state.contactInfo });
    return 'Toggled contact info!';
  }

  render() {
    return (
      <footer className={this.setFooterClass()}>
        <div
          id="contact-container"
          className={this.state.contactInfo ? 'show' : 'hide'}
        >
          <div id="contact-content">
            <p>917-854-7848</p>
            <p>abelsj60_AT_gmail.com</p>
          </div>
        </div>
        <p
          className={`contact-info ${this.setContactClass()}`}
          onClick={event => {
            this.toggleContactInfo();
            event.preventDefault();
          }}
        >
          Contact
        </p>
        <p className={`contact-info ${this.setContactClass()}`}>|</p>
        <p className={`copyright ${this.setContactClass()}`}>
          James Abels. All rights reserved. 2018.
        </p>
        {this.showAppBar() && (
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
