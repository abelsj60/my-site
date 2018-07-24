import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

const navLinks = [
  'My projects',
  'My story',
  'Journalism & Law' /*,
  'Alexa adventures' */
];
const setPath = function(linkText) {
  const nextPath =
    linkText === 'My projects'
      ? '/projects'
      : linkText === 'My story' ? '/chapter' : '/jnl';
  return nextPath;
};
const setActiveLink = function(currentPath, linkText) {
  const nextPath = setPath(linkText);
  return currentPath.includes(nextPath) ? 'active' : 'inactive';
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerMenuIsOpen: false
    };

    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
  }

  componentDidMount() {
    this.setState({ headerMenuIsOpen: false });
  }

  toggleHeaderMenu() {
    this.setState({ headerMenuIsOpen: !this.state.headerMenuIsOpen });
  }

  render() {
    const currentPath = this.props.location.pathname;
    const makeHeaderOpaque = function(transparency) {
      return !transparency ? ' opaque' : '';
    };
    const setHeaderMenuToOpen = function(headerMenuState) {
      return headerMenuState ? ' header-menu-open' : '';
    };

    return (
      <header className={makeHeaderOpaque(this.props.isTransparent)}>
        <section className={setHeaderMenuToOpen(this.state.headerMenuIsOpen)}>
          <Link className={makeHeaderOpaque(this.props.isTransparent)} to={'/'}>
            <strong>JAMES ABELS</strong>
          </Link>
          <p className={makeHeaderOpaque(this.props.isTransparent)}>
            <em>Magical stories and other adventures</em>
          </p>
        </section>
        <div
          className={
            'nav-icon' + setHeaderMenuToOpen(this.state.headerMenuIsOpen)
          }
          onClick={() => this.toggleHeaderMenu()}
        />
        {
          <nav className={setHeaderMenuToOpen(this.state.headerMenuIsOpen)}>
            {navLinks.map((linkText, index) => (
              <Link
                key={index}
                className={
                  setActiveLink(currentPath, linkText) +
                  makeHeaderOpaque(this.props.isTransparent)
                }
                to={setPath(linkText)}
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
