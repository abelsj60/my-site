import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderText from './HeaderText.jsx';
import HeaderNav from './HeaderNav.jsx';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: '',
      visibility:
        this.props.location.pathname.split('/')[1] === ''
          ? 'transparent'
          : 'opaque'
      /* location: this.props.location.pathname.split('/')[1] */
    };

    this.addCssToActiveLink = this.addCssToActiveLink.bind(this);
    this.toggleTransparency = this.toggleTransparency.bind(this);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  addCssWhenHeaderIsHome() {
    return this.location[1] === '' ? 'home-page-header' : '';
  }

  addCssToActiveLink(section) {
    if (section.toLowerCase() === 'the story') {
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

  componentDidUpdate() {
    window.addEventListener('scroll', this.toggleTransparency);

    // if (this.state.location !== this.location[1]) {
    //   this.setState({ location: this.location[1] });
    // }

    if (this.location[1] !== '' && this.state.visibility === 'transparent') {
      this.setState({ visibility: 'opaque' });
    }

    if (
      this.location[1] === '' &&
      this.scrollTop < 7 &&
      this.state.visibility === 'opaque'
    ) {
      this.setState({ visibility: 'transparent' });
    }
  }

  render() {
    return (
      <header
        id={this.addCssWhenHeaderIsHome()}
        className={`${this.state.visibility}${this.state.menu}`}
      >
        <HeaderText />
        <HeaderNav addCssToActiveLink={this.addCssToActiveLink} />
        <section id="nav-icon" onClick={() => this.toggleHeaderMenu()} />
      </header>
    );
  }
}

export default withRouter(Header);
