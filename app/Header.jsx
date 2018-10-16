import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderText from './HeaderText.jsx';
import HeaderNav from './HeaderNav.jsx';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuCss: ''
    };

    this.getCssForActiveLink = this.getCssForActiveLink.bind(this);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  getCssForOpaqueHeader() {
    return this.props.headerIsTransparent ? '' : ' opaque';
  }

  getCssForOpenHeaderMenu() {
    this.setState({
      menuCss: this.state.menuCss === '' ? ' menu-open' : ''
    });
  }

  getCssForActiveLink(section) {
    if (section === 'The story') {
      section = 'chapter';
    }

    return this.location[1] === section.toLowerCase() ? 'active' : 'inactive';
  }

  render() {
    return (
      <header
        className={`${this.getCssForOpaqueHeader()}${this.state.menuCss}`}
      >
        <HeaderText />
        <HeaderNav getCssForActiveLink={this.getCssForActiveLink} />
        <div id="nav-icon" onClick={() => this.getCssForOpenHeaderMenu()} />
      </header>
    );
  }
}

export default withRouter(Header);
