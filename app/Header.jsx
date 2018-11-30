import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderText from './HeaderText.jsx';
import HeaderNav from './HeaderNav.jsx';
import HeaderNavIcon from './HeaderNavIcon.jsx';
import { splitPath } from './helpers/utils.js';

class Header extends Component {
  constructor(props) {
    super(props);

    const userIsHome = splitPath(this.props)[1] === '';

    this.state = {
      menu: '',
      visibility: userIsHome ? 'transparent' : 'opaque'
    };

    this.timeoutId = 0;
    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
    this.toggleTransparency = this.toggleTransparency.bind(this);
  }

  get location() {
    return splitPath(this.props);
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  addCssWhenHeaderIsHome() {
    const userIsHome = this.location[1] === '';
    return userIsHome ? 'home-page-header' : 'inner-page-header';
  }

  toggleHeaderMenu() {
    const menuIsClosed = this.state.menu === '';

    this.setState({
      menu: menuIsClosed ? ' menu-open' : ''
    });

    if (menuIsClosed) {
      this.timeoutId = setTimeout(() => this.setState({ menu: '' }), 4000);
    } else {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  }

  restartMenuTimeout() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.setState({ menu: '' }), 4000);
  }

  toggleTransparency() {
    const scrollTop = this.scrollTop;
    const headerIsTransparent = this.state.visibility === 'transparent';

    if (headerIsTransparent && scrollTop >= 7) {
      this.setState({ visibility: 'opaque' });
    }

    if (!headerIsTransparent && scrollTop < 7) {
      this.setState({ visibility: 'transparent' });
    }
  }

  componentDidMount() {
    // console.log('Header Mounted!');

    window.addEventListener('scroll', this.toggleTransparency);
  }

  componentDidUpdate(prevProps) {
    // console.log('Header Updated!');

    const userIsHome = this.location[1] === '';
    const headerIsTransparent = this.state.visibility === 'transparent';
    const userIsTraveling = this.location[1] !== splitPath(prevProps)[1];
    const timeoutIsRunning = this.timeoutId;

    if (!userIsHome && headerIsTransparent) {
      this.setState({ visibility: 'opaque' });
    }

    if (userIsHome && !headerIsTransparent && this.scrollTop < 7) {
      this.setState({ visibility: 'transparent' });
    }

    if (userIsTraveling && timeoutIsRunning) {
      this.restartMenuTimeout();
    }
  }

  render() {
    return (
      <header
        id={this.addCssWhenHeaderIsHome()}
        className={`${this.state.visibility}${this.state.menu}`}
      >
        <section id="header-content">
          <HeaderText />
          <HeaderNav turnOffActiveButtons={this.props.turnOffActiveButtons} />
          <HeaderNavIcon toggleHeaderMenu={this.toggleHeaderMenu} />
        </section>
        <hr id="header-separator" />
      </header>
    );
  }
}

export default withRouter(Header);
