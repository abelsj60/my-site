import React, { Component } from 'react';
import HeaderText from './HeaderText.jsx';
import HeaderNav from './HeaderNav.jsx';
import HeaderIcon from './HeaderIcon.jsx';
import HtmlContainer from './HtmlContainer.jsx';
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
    window.addEventListener('scroll', this.toggleTransparency);
  }

  componentDidUpdate(prevProps) {
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
      <HtmlContainer
        element="header"
        id={
          splitPath(this.props)[1] === ''
            ? 'home-page-header'
            : 'inner-page-header'
        }
        className={`${this.state.visibility}`}
      >
        <HeaderText />
        <HtmlContainer element="nav">
          <HeaderNav location={this.props.location} />
        </HtmlContainer>
        <HeaderIcon toggleHeaderMenu={this.toggleHeaderMenu} />
      </HtmlContainer>
    );
  }
}

export default Header;
