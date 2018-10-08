import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import helpers from './helpers/helpers.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openHeaderMenu: false
    };

    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
  }

  componentDidMount() {
    this.setState({ openHeaderMenu: false });
  }

  toggleHeaderMenu() {
    this.setState({ openHeaderMenu: !this.state.openHeaderMenu });
  }

  render() {
    const currentPath = this.props.location.pathname;
    const navLinks = ['Projects', 'The story', 'Journalism'];

    return (
      <header className={helpers.setHeaderCss(this.props.headerIsTransparent)}>
        <section
          className={helpers.setHeaderMenuCss(this.state.openHeaderMenu)}
        >
          <Link
            className={helpers.setHeaderCss(this.props.headerIsTransparent)}
            to={'/'}
          >
            <strong>JAMES ABELS</strong>
          </Link>
          <p className={helpers.setHeaderCss(this.props.headerIsTransparent)}>
            <em>Magical stories and other adventures</em>
          </p>
        </section>
        <div
          className={
            'nav-icon' + helpers.setHeaderMenuCss(this.state.openHeaderMenu)
          }
          onClick={() => this.toggleHeaderMenu()}
        />
        {
          <nav className={helpers.setHeaderMenuCss(this.state.openHeaderMenu)}>
            {navLinks.map((linkText, index) => (
              <Link
                key={index}
                className={
                  helpers.setActiveLink(currentPath, linkText) +
                  helpers.setHeaderCss(this.props.headerIsTransparent)
                }
                to={helpers.idLinkPath(linkText)}
              >
                {linkText}
              </Link>
            ))}
          </nav>
        }
      </header>
    );
  }
}

export default withRouter(Header);
