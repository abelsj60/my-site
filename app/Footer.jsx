import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBarMenu from './AppBarMenu.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  get innerPage() {
    // ~ja Home is .length 1 (i.e., '/')
    return this.location.length > 2;
  }

  get indexPage() {
    return this.location[1] === 'index';
  }

  get aboutPage() {
    return this.location[1] === 'about';
  }

  get footerClass() {
    return this.innerPage ? 'inner-page-footer' : 'home-page-footer';
  }

  showAppBar() {
    return this.innerPage && !this.indexPage && !this.aboutPage;
  }

  render() {
    return (
      <footer
        className={this.footerClass}
        style={{ opacity: this.props.tempElementOpacity }}
      >
        {this.showAppBar() && (
          <AppBarMenu
            toggleText={this.props.toggleText}
            toggleDetails={this.props.toggleDetails}
          />
        )}
        <p className={'copyright'}>James Abels. All rights reserved. 2018.</p>
      </footer>
    );
  }
}

export default withRouter(Footer);
