import React, { Component } from 'react';
import AppBarFooter from './AppBarFooter.jsx';
import RegularFooter from './RegularFooter.jsx';
// import HtmlContainer from './HtmlContainer.jsx';
import { splitPath } from './helpers/utils.js';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
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
      switch (type) {
        case 'businessCard':
          return this.props.toggleBusinessCard();
        case 'legalTerms':
          return this.props.toggleLegalTerms();
        default:
          return this.props.toggleText();
      }
    }
  }

  componentDidUpdate(prevProps) {
    const businessCardIsActive = this.props.state.contact === 'active';
    const legalTermsAreActive = this.props.state.legalTerms === 'active';
    const storyTextIsNotActive = this.props.state.explore === 'active';

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
    const home = this.location[1] === '';

    return (
      <footer
        className={this.props.state.magicClicks}
        style={home ? this.props.state.magicOpacity : null}
        id={home ? 'home-page-footer' : 'inner-page-footer'}
      >
        <RegularFooter {...this.props} />
        <AppBarFooter {...this.props} />
      </footer>
    );
  }
}
