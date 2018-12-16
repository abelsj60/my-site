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
          return this.props.boundHandleClickForApp('showBusinessCard');
        case 'legalTerms':
          return this.props.boundHandleClickForApp('showLegalTerms');
        default:
          return this.props.boundHandleClickForApp('showStoryText');
      }
    }
  }

  componentDidUpdate(prevProps) {
    const businessCardIsActive = this.props.state.showBusinessCard;
    const legalTermsAreActive = this.props.state.showLegalTerms;
    const storyTextIsNotActive = this.props.state.showStory;

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
    const magicOpacity = this.props.state.magicOpacity;

    return (
      <footer
        className={this.props.state.magicClicks}
        style={home ? { opacity: magicOpacity } : null}
        id={home ? 'home-page-footer' : 'inner-page-footer'}
      >
        <RegularFooter {...this.props} />
        <AppBarFooter {...this.props} />
      </footer>
    );
  }
}
