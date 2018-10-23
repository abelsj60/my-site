import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from './AppBar.jsx';
import BusinessCard from './BusinessCard.jsx';
import FooterText from './FooterText.jsx';
import { getPath } from './helpers/utils.js';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: 'inactive',
      menu: getPath(this.props).includes('menu') ? 'active' : 'inactive',
      text: 'inactive'
    };

    this.toggleStoryText = this.toggleStoryText.bind(this);
    this.toggleButtonState = this.toggleButtonState.bind(this);
    this.toggleBusinessCard = this.toggleBusinessCard.bind(this);
  }

  get location() {
    return getPath(this.props).split('/');
  }

  addCssThatLocatesFooter() {
    return this.location[1] !== '' ? 'inner-page-footer' : 'home-page-footer';
  }

  addAppBarToPage() {
    return this.location[1] !== '';
  }

  toggleButtonState(buttonLabel) {
    this.setState({
      [buttonLabel]:
        this.state[buttonLabel] === 'inactive' ? 'active' : 'inactive'
    });
  }

  toggleStoryText() {
    this.props.toggleText();
    this.toggleButtonState('text');
  }

  toggleBusinessCard() {
    this.toggleButtonState('contact');
  }

  componentDidUpdate(prevProps) {
    if (this.state.contact === 'active') {
      const prevPath = getPath(prevProps);
      let prevSiteSection =
        prevPath.split('/')[1] === 'menu'
          ? prevPath.split('/')[2]
          : prevPath.split('/')[1];

      if (this.location[1] !== '' && prevSiteSection === '') {
        prevSiteSection = 'Do not reset';
      }

      if (
        this.state.contact === 'active' &&
        !this.location.includes(prevSiteSection)
      ) {
        this.toggleButtonState('contact');
      }
    }

    if (this.state.menu === 'active' && this.location[1] !== 'menu') {
      this.toggleButtonState('menu');
    }

    if (this.state.menu === 'inactive' && this.location[1] === 'menu') {
      this.toggleButtonState('menu');
    }

    if (this.state.text === 'active' && !this.location.includes('chapter')) {
      this.props.toggleText();
      this.toggleButtonState('text');
    }
  }

  render() {
    return (
      <footer
        id={this.addCssThatLocatesFooter()}
        className={this.props.state.magicClicks}
        style={this.location[1] === '' ? this.props.state.magicOpacity : null}
      >
        <BusinessCard state={this.state} />
        <FooterText toggleBusinessCard={this.toggleBusinessCard} />
        {this.addAppBarToPage() && (
          <AppBar
            state={this.props.state}
            footerState={this.state}
            toggleStoryText={this.toggleStoryText}
            toggleBusinessCard={this.toggleBusinessCard}
          />
        )}
      </footer>
    );
  }
}

export default withRouter(Footer);
