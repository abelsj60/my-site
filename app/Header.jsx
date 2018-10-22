import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderText from './HeaderText.jsx';
import HeaderNav from './HeaderNav.jsx';
import HeaderNavIcon from './HeaderNavIcon.jsx';
import { getPath } from './helpers/utils.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: '',
      visibility:
        getPath(this.props).split('/')[1] === '' ? 'transparent' : 'opaque'
    };

    this.timeoutId = 0;

    this.closeHeaderMenuViaSetTimeout = this.closeHeaderMenuViaSetTimeout.bind(
      this
    );
    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
    this.toggleTransparency = this.toggleTransparency.bind(this);
  }

  get location() {
    return getPath(this.props).split('/');
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  addCssWhenHeaderIsHome() {
    return this.location[1] === '' ? 'home-page-header' : 'inner-page-header';
  }

  toggleHeaderMenu() {
    this.setState({
      menu: this.state.menu === '' ? ' menu-open' : ''
    });
  }

  toggleTransparency() {
    // ~ja Called via event listeners, not component!

    const scrollTop = this.scrollTop;

    if (this.state.visibility === 'transparent' && scrollTop >= 7) {
      this.setState({ visibility: 'opaque' });
    }

    if (this.state.visibility === 'opaque' && scrollTop < 7) {
      this.setState({ visibility: 'transparent' });
    }
  }

  closeHeaderMenuViaSetTimeout() {
    if (this.state.menu === '') {
      this.timeoutId = setTimeout(() => this.setState({ menu: '' }), 4000);
    }

    if (this.timeoutId && this.state.menu !== '') {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleTransparency);
  }

  componentDidUpdate(prevProps) {
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

    if (this.location[1] !== getPath(prevProps).split('/')[1]) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = 0;
        this.timeoutId = setTimeout(() => this.setState({ menu: '' }), 4000);
      }
    }
  }

  render() {
    return (
      <header
        id={this.addCssWhenHeaderIsHome()}
        className={`${this.state.visibility}${this.state.menu}`}
      >
        <HeaderText />
        <HeaderNav />
        <HeaderNavIcon
          toggleHeaderMenu={this.toggleHeaderMenu}
          closeHeaderMenuViaSetTimeout={this.closeHeaderMenuViaSetTimeout}
        />
      </header>
    );
  }
}

export default withRouter(Header);
