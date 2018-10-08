import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBarMenu from './AppBarMenu.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  get isAnInnerPage() {
    {
      /* ~ja Home is .length 1 (i.e., '/'), anything more is an inner page */
    }

    return this.props.location.pathname.length > 1;
  }

  get footerClass() {
    return this.isAnInnerPage ? 'inner-page-footer' : 'home-page-footer';
  }

  render() {
    return (
      <footer
        className={this.footerClass}
        style={{ opacity: this.props.tempElementOpacity }}
      >
        {this.isAnInnerPage && (
          <AppBarMenu
            showStoryText={this.props.showStoryText}
            toggleText={this.props.toggleText}
            showProjectDetails={this.props.showProjectDetails}
            toggleDetails={this.props.toggleDetails}
          />
        )}
        <p className={'copyright'}>James Abels. All rights reserved. 2018.</p>
      </footer>
    );
  }
}

export default withRouter(Footer);
