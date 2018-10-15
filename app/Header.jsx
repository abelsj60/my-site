import React, { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import headerData from './data/headerData.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuCss: ''
    };

    this.openHeaderMenu = this.openHeaderMenu.bind(this);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  makeHeaderOpaque() {
    // console.log('opaque');
    return this.props.headerIsTransparent ? '' : ' opaque';
  }

  openHeaderMenu() {
    this.setState({
      menuCss: this.state.menuCss === '' ? 'header-menu-open' : ''
    });
  }

  setActiveLink(section) {
    if (section === 'The story') {
      section = 'chapter';
    }

    return this.location[1] === section.toLowerCase() ? 'active' : 'inactive';
  }

  render() {
    return (
      <Fragment>
        <header className={this.makeHeaderOpaque()}>
          <Link
            id="site-name"
            className={this.state.menuCss + this.makeHeaderOpaque()}
            to={'/'}
          >
            James Abels
          </Link>
          <p
            id="site-motto"
            className={this.state.menuCss + this.makeHeaderOpaque()}
          >
            Magical stories and other adventures
          </p>
          <nav className={this.state.menuCss}>
            {headerData.map((section, index) => (
              <Link
                key={index}
                className={`${this.setActiveLink(section.name)}
                ${this.makeHeaderOpaque()}`}
                to={section.path}
              >
                {section.name}
              </Link>
            ))}
          </nav>
          <div
            id="nav-icon"
            className={`${this.makeHeaderOpaque(this.magicTransparency)} ${
              this.state.menuCss
            }`}
            onClick={() => this.openHeaderMenu()}
          />
        </header>
      </Fragment>
    );
  }
}

export default withRouter(Header);
