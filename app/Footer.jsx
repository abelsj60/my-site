import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from './AppBar.jsx';
import BusinessCard from './BusinessCard.jsx';
import FooterText from './FooterText.jsx';
import Legal from './Legal.jsx';
import { splitPath } from './helpers/utils.js';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: 'inactive'
    };

    this.toggleBusinessCard = this.toggleBusinessCard.bind(this);
  }

  get location() {
    return splitPath(this.props);
  }

  get copyrightYear() {
    return new Date().getFullYear();
  }

  addCssThatLocatesFooter() {
    return this.location[1] !== '' ? 'inner-page-footer' : 'home-page-footer';
  }

  addAppBarToPage() {
    return this.location[1] !== '';
  }

  toggleBusinessCard() {
    this.setState({
      contact: this.state.contact === 'inactive' ? 'active' : 'inactive'
    });
  }

  componentDidUpdate(prevProps) {
    if (this.state.contact === 'active') {
      const prevPath = splitPath(prevProps);
      let prevSection = prevPath[1] === 'menu' ? prevPath[2] : prevPath[1];

      if (this.location[1] !== '' && prevSection === '') {
        /*
          ~ja Without this conditional, the prevSection, a string will
          match and the businessCard won't shut off:
            '' -businessCard on
            '/chapter' - businessCard on b/c prevSection matched
            '/chapter/title' - buisnessCard stays on b/c we match 'chapter'

          This is b/c we use redirects to navigate via Links.
        */

        prevSection = 'Close businessCard when leaving home';
      }

      if (
        this.state.contact === 'active' &&
        !this.location.includes(prevSection)
      ) {
        this.toggleBusinessCard('contact');
      }
    }

    if (this.state.explore === 'active' && !this.location.includes('chapter')) {
      this.props.toggleText();
    }
  }

  render() {
    return (
      <footer
        id={this.addCssThatLocatesFooter()}
        className={this.props.state.magicClicks}
        style={this.location[1] === '' ? this.props.state.magicOpacity : null}
      >
        <Legal state={this.props.state} />
        <BusinessCard state={this.state} />
        <FooterText
          state={this.props.state}
          footerState={this.state}
          toggleLegal={this.props.toggleLegal}
          toggleBusinessCard={this.toggleBusinessCard}
        />
        {this.addAppBarToPage() && (
          <AppBar
            state={this.props.state}
            footerState={this.state}
            toggleText={this.props.toggleText}
            toggleMenu={this.props.toggleMenu}
            toggleLegal={this.props.toggleLegal}
            toggleBusinessCard={this.toggleBusinessCard}
          />
        )}
      </footer>
    );
  }
}

export default withRouter(Footer);
