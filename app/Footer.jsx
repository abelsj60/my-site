import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from './AppBar.jsx';
import BusinessCard from './BusinessCard.jsx';
import FooterText from './FooterText.jsx';
import LegalTerms from './LegalTerms.jsx';
import { splitPath } from './helpers/utils.js';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: 'inactive',
      legalTerms: 'inactive'
    };

    this.toggleLegalTerms = this.toggleLegalTerms.bind(this);
    this.toggleBusinessCard = this.toggleBusinessCard.bind(this);
  }

  get location() {
    return splitPath(this.props);
  }

  get copyrightYear() {
    return new Date().getFullYear();
  }

  addCssThatLocatesFooter() {
    const isRoot = this.location[1] === '';
    return isRoot ? 'home-page-footer' : 'inner-page-footer';
  }

  addAppBarToPage() {
    return this.location[1] !== '';
  }

  toggleBusinessCard() {
    const isActive = this.state.contact === 'active';

    this.setState({
      contact: isActive ? 'inactive' : 'active'
    });
  }

  toggleLegalTerms() {
    const isActive = this.state.legalTerms === 'active';

    this.setState({
      legalTerms: isActive ? 'inactive' : 'active'
    });
  }

  deactivateButton(type, prevProps) {
    const splitPreviousPath = splitPath(prevProps);
    const previousSection =
      splitPreviousPath[1] === 'menu'
        ? splitPreviousPath[2]
        : splitPreviousPath[1];
    const userIsNotHome = this.location[1] !== '';
    const userIsComingFromHome = previousSection === '';
    let userIsTraveling = !this.location.includes(previousSection);

    if (userIsNotHome && userIsComingFromHome) {
      userIsTraveling = true;
    }

    if (userIsTraveling) {
      if (type === 'businessCard') {
        return this.toggleBusinessCard();
      } else if (type === 'legalTerms') {
        return this.toggleLegalTerms();
      } else {
        return this.props.toggleText();
      }
    }
  }

  componentDidUpdate(prevProps) {
    const businessCardIsActive = this.state.contact === 'active';
    const legalTermsAreActive = this.state.legalTerms === 'active';
    const storyTextIsNotActive = this.state.explore === 'active';

    if (businessCardIsActive) {
      this.deactivateButton('businessCard', prevProps);
    }

    if (legalTermsAreActive) {
      this.deactivateButton('legalTerms', prevProps);
    }

    if (storyTextIsNotActive) {
      this.deactivateButton('storyText', prevProps);
    }
  }

  render() {
    return (
      <Fragment>
        <footer
          id={this.addCssThatLocatesFooter()}
          className={this.props.state.magicClicks}
          style={this.location[1] === '' ? this.props.state.magicOpacity : null}
        >
          <BusinessCard footerState={this.state} />
          <LegalTerms footerState={this.state} />
          <FooterText
            state={this.props.state}
            footerState={this.state}
            toggleLegalTerms={this.toggleLegalTerms}
            toggleBusinessCard={this.toggleBusinessCard}
          />
          {this.addAppBarToPage() && (
            <AppBar
              state={this.props.state}
              footerState={this.state}
              toggleText={this.props.toggleText}
              toggleLegalTerms={this.toggleLegalTerms}
              toggleBusinessCard={this.toggleBusinessCard}
            />
          )}
        </footer>
      </Fragment>
    );
  }
}

export default withRouter(Footer);
