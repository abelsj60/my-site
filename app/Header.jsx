import React, { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import headerData from './data/headerData.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false
    };

    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  get headerIsTransparent() {
    return this.props.headerIsTransparent;
  }

  get menuIsOpen() {
    return this.state.openMenu;
  }

  setHeaderCss(transparencyStatus) {
    return !transparencyStatus ? ' opaque' : '';
  }

  setMenuCss(menuStatus) {
    return menuStatus ? 'header-menu-open' : '';
  }

  setRoute(link) {
    return link === 'The story'
      ? '/chapter'
      : link === 'Projects'
        ? '/projects'
        : link === 'Journalism'
          ? '/journalism'
          : '/about';
  }

  setActiveLink(link) {
    if (link === 'The story') {
      link = 'chapter';
    }

    return this.location[1] === link.toLowerCase() ? 'active' : 'inactive';
  }

  toggleHeaderMenu() {
    console.log('HERE!');
    this.setState({ openMenu: !this.menuIsOpen });
    return 'Toggled header menu!';
  }

  render() {
    return (
      <Fragment>
        <header className={this.setHeaderCss(this.headerIsTransparent)}>
          <Link
            id="site-name"
            className={
              this.setMenuCss(this.menuIsOpen) +
              this.setHeaderCss(this.headerIsTransparent)
            }
            to={'/'}
          >
            James Abels
          </Link>
          <p
            id="site-motto"
            className={
              this.setMenuCss(this.menuIsOpen) +
              this.setHeaderCss(this.headerIsTransparent)
            }
          >
            Magical stories and other adventures
          </p>
          <nav className={this.setMenuCss(this.menuIsOpen)}>
            {headerData.map((link, index) => (
              <Link
                key={index}
                className={`${this.setActiveLink(link)}
                ${this.setHeaderCss(this.headerIsTransparent)}`}
                to={this.setRoute(link)}
              >
                {link}
              </Link>
            ))}
          </nav>
          <div
            id="nav-icon"
            className={`${this.setHeaderCss(
              this.headerIsTransparent
            )} ${this.setMenuCss(this.menuIsOpen)}`}
            onClick={() => this.toggleHeaderMenu()}
          />
        </header>
      </Fragment>
    );
  }
}

export default withRouter(Header);
