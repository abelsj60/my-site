import React, { Component } from 'react';
import HeaderText from './HeaderText.jsx';
import HeaderNav from './HeaderNav.jsx';
import HeaderIcon from './HeaderIcon.jsx';
import HtmlContainer from './HtmlContainer.jsx';
import { splitPath } from './helpers/utils.js';

class Header extends Component {
  constructor(props) {
    super(props);

    const isHome = props.home === 'active';

    this.state = {
      menu: '',
      visibility: isHome ? 'transparent' : 'opaque'
    };

    this.timeoutId = 0;
    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
    this.toggleTransparency = this.toggleTransparency.bind(this);
  }

  get location() {
    return splitPath(this.props);
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
    const scrollTop = this.props.scrollTop;
    const headerIsTransparent = this.state.visibility === 'transparent';

    console.log('hIT:', headerIsTransparent, ' | ', scrollTop);

    if (scrollTop >= 51) {
      console.log('make opaque');
      this.setState({ visibility: 'opaque' });
    }

    if (scrollTop < 50) {
      console.log('make transparent');
      this.setState({ visibility: 'transparent' });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleTransparency);
  }

  componentDidUpdate(prevProps) {
    const isHome = this.props.home === 'active';
    const headerIsTransparent = this.state.visibility === 'transparent';
    const userIsTraveling = this.location[1] !== splitPath(prevProps)[1];
    const timeoutIsRunning = this.timeoutId;

    if (!isHome && headerIsTransparent) {
      this.setState({ visibility: 'opaque' });
    }

    if (isHome && !headerIsTransparent && this.scrollTop < 7) {
      this.setState({ visibility: 'transparent' });
    }

    if (userIsTraveling && timeoutIsRunning) {
      this.restartMenuTimeout();
    }
  }

  render() {
    const isHome = this.props.home === 'active';

    return (
      <HtmlContainer
        element="header"
        id={isHome ? 'home-page-header' : 'inner-page-header'}
        className={`${this.state.visibility}`}
      >
        <HeaderText />
        <HtmlContainer element="nav">
          <HeaderNav {...this.props} />
        </HtmlContainer>
        <HeaderIcon toggleHeaderMenu={this.toggleHeaderMenu} />
      </HtmlContainer>
    );
  }
}

export default Header;
