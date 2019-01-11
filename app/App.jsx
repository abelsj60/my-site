import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import styled, { css, createGlobalStyle } from 'styled-components';

import Location from './custom/Location.js';
import Header from './Header.jsx';
import Body from './Body.jsx';
import BusinessCard from './BusinessCard.jsx';
import LegalTerms from './LegalTerms.jsx';
import FooterContainer from './Footer.jsx';
import MagicScroller from './MagicScroller.jsx';

import Referrer from './custom/Referrer.js';
import EventHandling from './custom/EventHandling.js';
import Spellbook from './custom/Spellbook.js';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: lato;
    font-size: 62.5%;
  }

  body {
    font-size: 1.5rem;
  }
`;
const Page = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${props =>
    props.home === 'active' &&
    css`
      width: 100%;
      position: fixed;
      background: url('/howls-background-dl.jpg') no-repeat fixed center top;
    `};
`;
const HeaderSeperator = styled.hr`
  width: 100%;
  margin: 0;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0)
  );
`;

class App extends Component {
  constructor(props) {
    super(props);

    const r = new Referrer(this.props);

    this.state = {
      showStory: true,
      showLegalTerms: false,
      showBusinessCard: false,
      magicOpacity: 0,
      blockPointer: r.location === 'home'
    };

    console.log('---APP---');
  }

  render() {
    const l = new Location('/', this.props);
    const isHome = l.type === 'home' ? 'active' : '';

    const eForApp = new EventHandling('app', this);
    const boundHandleClickForApp = eForApp.boundHandleClick;

    const spellBook = new Spellbook('home', this);
    const boundSpellsForHome = spellBook.castSpell;

    return (
      <Fragment>
        <GlobalStyle />
        <Page home={isHome}>
          <Header {...this.props} scrollTop={this.scrollTop} />
          <HeaderSeperator />
          <Body
            {...this.props}
            state={this.state}
            boundSpellsForHome={boundSpellsForHome}
          />
          <BusinessCard {...this.props} state={this.state} />
          <LegalTerms {...this.props} state={this.state} />
          <FooterContainer
            {...this.props}
            state={this.state}
            boundHandleClickForApp={boundHandleClickForApp}
          />
        </Page>
        <MagicScroller home={isHome} />
      </Fragment>
    );
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  componentDidUpdate(prevProps) {
    const l = new Location('/', this.props, prevProps);

    const eForApp = new EventHandling('app', this);
    const handleClickForApp = eForApp.boundHandleClick;

    if (l.justChanged) {
      const { showBusinessCard, showLegalTerms, showStory } = this.state;

      if (showBusinessCard) {
        handleClickForApp('showBusinessCard');
      }

      if (showLegalTerms) {
        handleClickForApp('showLegalTerms');
      }

      if (!showStory) {
        handleClickForApp('showStoryText');
      }
    }
  }
}

export default withRouter(App);

/**
 * At 2200, it's 0
 * At 3223, it's 1
 *
 * At 2200, it's 0
 * At 3223, it's 1
 */

/** Temp notes
 *  At 0, it's 6
 *  At 3223, it's 1
 */
