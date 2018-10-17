import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderText from './HeaderText.jsx';
import HeaderNav from './HeaderNav.jsx';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: '',
      visibility: this.props.home ? 'transparent' : 'opaque'
    };

    this.addCssToActiveLink = this.addCssToActiveLink.bind(this);
    this.toggleTransparency = this.toggleTransparency.bind(this);
  }

  componentDidMount() {
    if (this.props.home) {
      window.addEventListener('scroll', this.toggleTransparency);
    }
  }

  componentWillUnmount() {
    if (this.props.home) {
      window.removeEventListener('scroll', this.toggleTransparency);
    }
  }

  addCssWhenHeaderIsHome() {
    return this.props.home ? ' home-page' : '';
  }

  addCssToActiveLink(section) {
    if (section === 'The story') {
      section = 'chapter';
    }

    return this.props.location.pathname.includes(section.toLowerCase())
      ? 'active'
      : '';
  }

  toggleHeaderMenu() {
    this.setState({
      menu: this.state.menu === '' ? ' menu-open' : ''
    });
  }

  toggleTransparency() {
    // ~ja Called via event listeners, not component!

    const scrollTop = window.pageYOffset;

    if (this.state.visibility === 'transparent' && scrollTop >= 7) {
      this.setState({ visibility: 'opaque' });
    }

    if (this.state.visibility === 'opaque' && scrollTop < 7) {
      this.setState({ visibility: 'transparent' });
    }
  }

  render() {
    return (
      <header
        className={`${this.state.visibility}${
          this.state.menu
        }${this.addCssWhenHeaderIsHome()}`}
      >
        <HeaderText />
        <HeaderNav addCssToActiveLink={this.addCssToActiveLink} />
        <section id="nav-icon" onClick={() => this.toggleHeaderMenu()} />
      </header>
    );
  }
}

export default withRouter(Header);
