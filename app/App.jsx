import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import styled, { css, createGlobalStyle } from 'styled-components';

import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Location from './custom/Location.js';
import MagicScroller from './MagicScroller.jsx';
import LegalTermsOrBizCard from './LegalTermsOrBizCard.jsx';

import EventHandling from './custom/EventHandling.js';
import Referrer from './custom/Referrer.js';
import Spellbook from './custom/Spellbook.js';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: lato;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
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

    const r = new Referrer(props);

    this.state = {
      showStoryText: true,
      showLegalTerms: false,
      showBusinessCard: false,
      magicOpacity: 0,
      blockPointer: r.location === 'home'
    };
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
          <Header home={isHome} {...this.props} scrollTop={this.scrollTop} />
          <HeaderSeperator />
          <Body
            {...this.props}
            state={this.state}
            boundSpellsForHome={boundSpellsForHome}
          />
          <LegalTermsOrBizCard
            home={isHome}
            {...this.props}
            state={this.state}
          />
          <Footer
            home={isHome}
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
      const { showBusinessCard, showLegalTerms, showStoryText } = this.state;

      if (showBusinessCard) {
        handleClickForApp('showBusinessCard');
      }

      if (showLegalTerms) {
        handleClickForApp('showLegalTerms');
      }

      if (!showStoryText) {
        handleClickForApp('showStoryText');
      }
    }
  }
}

export default withRouter(App);
