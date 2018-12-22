import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import { splitPath } from './helpers/utils.js';
import styled, { css, createGlobalStyle } from 'styled-components';

import Header from './Header.jsx';
import Body from './Body.jsx';
import BusinessCard from './BusinessCard.jsx';
import LegalTerms from './LegalTerms.jsx';
import FooterContainer from './Footer.jsx';
import MagicScroller from './MagicScroller.jsx';

import EventHandling from './custom/EventHandling.js';

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
const HeaderRule = styled.hr`
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

    const home = splitPath(this.props)[1] === '';

    this.magicClicks = home ? 'block' : '';
    this.startingScale = 6;
    this.startingOpacity = 0;

    this.state = {
      showStory: true,
      showLegalTerms: false,
      showBusinessCard: false,
      magicOpacity: this.startingOpacity,
      magicScale: this.startingScale,
      magicClicks: this.magicClicks
    };

    /** Method bindings */

    this.setMagicScale = this.setMagicScale.bind(this);
    this.setMagicOpacity = this.setMagicOpacity.bind(this);
    this.toggleMagicPointer = this.toggleMagicPointer.bind(this);

    console.log('---APP---');
  }

  render() {
    const path = splitPath(this.props)[1];
    const homeIsActive = path === '' ? 'active' : '';
    const menuIsActive = path === 'menu' ? 'active' : '';
    const eventHandlingForApp = new EventHandling('app', this);
    const boundHandleClickForApp = eventHandlingForApp.boundHandleClick;

    return (
      <Fragment>
        <GlobalStyle />
        <Page home={homeIsActive} menu={menuIsActive}>
          <Header {...this.props} scrollTop={this.scrollTop} />
          <HeaderRule />
          <Body
            {...this.props}
            state={this.state}
            setMagicScale={this.setMagicScale}
            setMagicOpacity={this.setMagicOpacity}
            toggleMagicPointer={this.toggleMagicPointer}
          />
          <BusinessCard {...this.props} state={this.state} />
          <LegalTerms {...this.props} state={this.state} />
          <FooterContainer
            {...this.props}
            state={this.state}
            boundHandleClickForApp={boundHandleClickForApp}
          />
        </Page>
        <MagicScroller />
      </Fragment>
    );
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  setMagicOpacity() {
    let finalOpacity;

    // const opacityValue = (this.scrollTop - 580) / (3221 - 580);

    const opacityValue = this.scrollTop / 6000;

    // const ratioOfScrollTopToPosition = this.scrollTop / 3900;
    // const valueForResizing =
    //   this.startingScale - ratioOfScrollTopToPosition * this.startingScale;

    // console.log('sT:', this.scrollTop);
    // console.log('oV:', opacityValue);
    // console.log();

    const opacityToString = opacityValue + '';
    const opacityFailSafe =
      this.scrollTop < 15 && this.state.magicOpacity !== 0;

    if (opacityValue > 0 && opacityValue <= 1) {
      finalOpacity = opacityToString.slice(1, 4);
    } else if (opacityValue >= 1) {
      finalOpacity = 1;
    } else if (opacityFailSafe) {
      finalOpacity = 0;
    }

    if (typeof finalOpacity !== 'string') {
      finalOpacity = finalOpacity + '';
    }

    if (finalOpacity || opacityFailSafe) {
      this.setState({
        magicOpacity: finalOpacity
      });
    }
  }

  toggleMagicPointer() {
    if (
      splitPath(this.props)[1] === '' &&
      this.state.magicClicks === 'block' &&
      this.scrollTop > 3220
    ) {
      this.setState({ magicClicks: '' });
    }

    if (
      splitPath(this.props)[1] === '' &&
      this.state.magicClicks === '' &&
      this.scrollTop < 3220
    ) {
      this.setState({ magicClicks: 'block' });
    }
  }

  setMagicScale() {
    const scrollTopToContainerRatio = this.scrollTop / 3900;
    const valueForResizing =
      this.startingScale - scrollTopToContainerRatio * this.startingScale;

    /** Note: Passing as string considerably reduces jank, using
     * true numbers w/parseInt() is a TOTAL DISASTER
     */

    const resizeToString = valueForResizing + '';
    const finalScale = resizeToString.slice(0, 4);

    this.setState({
      magicScale: finalScale
    });
  }

  componentDidUpdate(prevProps) {
    const location = splitPath(this.props);
    const eventHandlingForApp = new EventHandling('app', this);
    const handleClickForApp = eventHandlingForApp.boundHandleClick;

    const updateMagicClicksWhenGoingHome =
      location[1] === '' &&
      this.scrollTop < 3220 &&
      this.state.magicClicks === '';
    const updateMagicClicksWhenLeavingHome =
      location[1] !== '' && this.state.magicClicks === 'block';

    if (updateMagicClicksWhenGoingHome || updateMagicClicksWhenLeavingHome) {
      this.setState({
        magicClicks: updateMagicClicksWhenGoingHome
          ? 'block'
          : updateMagicClicksWhenLeavingHome
            ? ''
            : this.state.magicClicks
      });
    }

    if (location[1] !== splitPath(prevProps)[1]) {
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
