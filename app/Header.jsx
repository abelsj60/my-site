import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

const navLinks = [
  'My projects',
  'My story',
  'Journalism & Law' /*,
  'Alexa adventures' */
];

function idLinkPath(linkText) {
  const linkPath =
    linkText === 'My projects'
      ? '/projects'
      : linkText === 'My story' ? '/chapter' : '/jnl';
  return linkPath;
}

function setActiveLink(currentPath, linkText) {
  const linkPath = idLinkPath(linkText);
  return currentPath.includes(linkPath) ? 'active' : 'inactive';
}

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

    function makeHeaderOpaque(transparency) {
      return !transparency ? ' opaque' : '';
    }

    function setHeaderMenuToOpen(headerMenuState) {
      return headerMenuState ? ' header-menu-open' : '';
    }

    return (
      <header className={makeHeaderOpaque(this.props.isTransparent)}>
        <section className={setHeaderMenuToOpen(this.state.openHeaderMenu)}>
          <Link className={makeHeaderOpaque(this.props.isTransparent)} to={'/'}>
            <strong>JAMES ABELS</strong>
          </Link>
          <p className={makeHeaderOpaque(this.props.isTransparent)}>
            <em>Magical stories and other adventures</em>
          </p>
        </section>
        <div
          className={
            'nav-icon' + setHeaderMenuToOpen(this.state.openHeaderMenu)
          }
          onClick={() => this.toggleHeaderMenu()}
        />
        {
          <nav className={setHeaderMenuToOpen(this.state.openHeaderMenu)}>
            {navLinks.map((linkText, index) => (
              <Link
                key={index}
                className={
                  setActiveLink(currentPath, linkText) +
                  makeHeaderOpaque(this.props.isTransparent)
                }
                to={idLinkPath(linkText)}
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
