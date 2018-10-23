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
      menu: 'inactive',
      text: 'inactive'
    };

    this.toggleStoryText = this.toggleStoryText.bind(this);
    this.toggleButtonOnAndOff = this.toggleButtonOnAndOff.bind(this);
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

  toggleButtonOnAndOff(buttonLabel) {
    this.setState({
      [buttonLabel]:
        this.state[buttonLabel] === 'inactive' ? 'active' : 'inactive'
    });
  }

  toggleStoryText() {
    this.props.toggleText();
    this.toggleButtonOnAndOff('text');
  }

  toggleBusinessCard() {
    this.toggleButtonOnAndOff('contact');
  }

  componentDidUpdate(prevProps) {
    if (this.state.contact === 'active') {
      const prevPath = getPath(prevProps);
      let prevSiteSection =
        prevPath.split('/')[1] === 'menu'
          ? prevPath.split('/')[2]
          : prevPath.split('/')[1];

      if (this.location[1] !== '' && prevSiteSection === '') {
        /*
          ~ja Without this conditional, the prevSiteSection, a string will
          match and the businessCard won't shut off:
            '' -businessCard on
            '/chapter' - businessCard on b/c prevSiteSection matched
            '/chapter/title' - buisnessCard stays on b/c we match 'chapter'

          This is b/c we use redirects to navigate via Links.
        */

        prevSiteSection = 'Close businessCard when leaving home';
      }

      if (
        this.state.contact === 'active' &&
        !this.location.includes(prevSiteSection)
      ) {
        this.toggleButtonOnAndOff('contact');
      }
    }

    if (this.state.text === 'active' && !this.location.includes('chapter')) {
      this.props.toggleText();
      this.toggleButtonOnAndOff('text');
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
