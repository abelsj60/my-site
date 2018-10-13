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

  render() {
    console.log(this.showAppBar());
    console.log(!this.showAppBar());
    return (
      <footer
        className={this.setFooterClass()}
        style={{ opacity: this.props.tempElementOpacity }}
      >
        {this.showAppBar() && (
          <AppBarMenu
            toggleText={this.props.toggleText}
            toggleDetails={this.props.toggleDetails}
          />
        )}
        {!this.showAppBar() && (
          <p className={'copyright'}>James Abels. All rights reserved. 2018.</p>
        )}
      </footer>
    );
  }
}

export default withRouter(Footer);
