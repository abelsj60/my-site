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

    this.toggleTransparency = this.toggleTransparency.bind(this);
  }

  get location() {
    return getPath(this.props).split('/');
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  addCssWhenHeaderIsHome() {
    return this.location[1] === '' ? 'home-page-header' : '';
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

  componentDidMount() {
    window.addEventListener('scroll', this.toggleTransparency);
  }

  componentDidUpdate() {
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
        <HeaderNav />
        <HeaderNavIcon toggleTransparency={this.toggleTransparency} />
      </header>
    );
  }
}

export default withRouter(Header);
