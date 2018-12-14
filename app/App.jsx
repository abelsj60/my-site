import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import { splitPath } from './helpers/utils.js';
import HtmlContainer from './HtmlContainer.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';
import BusinessCard from './BusinessCard.jsx';
import LegalTerms from './LegalTerms.jsx';
import FooterContainer from './FooterContainer.jsx';
import MagicScroller from './MagicScroller.jsx';
import EventHandling from './custom/EventHandling.js';

class App extends Component {
  constructor(props) {
    super(props);

    const home = splitPath(this.props)[1] === '';

    this.state = {
      showStory: true,
      showLegalTerms: false,
      showBusinessCard: false,
      magicOpacity: { opacity: 0 },
      magicClicks: home ? 'block' : ''
    };

    /** Method bindings */

    this.setMagicOpacity = this.setMagicOpacity.bind(this);
    this.toggleMagicPointer = this.toggleMagicPointer.bind(this);

    console.log('---APP---');
  }

  render() {
    const path = splitPath(this.props)[1];
    const pageCss = path === '' ? 'home' : 'inner';
    const menuCss = path === 'menu' ? ' menu-page' : '';
    const eventHandlingForApp = new EventHandling('app', this);
    const boundHandleClickForApp = eventHandlingForApp.boundHandleClick;

    return (
      <Fragment>
        <HtmlContainer
          id="page"
          element="section"
          className={`${pageCss} ${menuCss}`}
        >
          <Header
            {...this.props}
            state={this.props.state}
            scrollTop={this.scrollTop}
          />
          <hr id="header-separator" />
          <Body
            {...this.props}
            state={this.state}
            setMagicOpacity={this.setMagicOpacity}
            toggleMagicPointer={this.toggleMagicPointer}
          />
          <BusinessCard state={this.state} />
          <LegalTerms state={this.state} {...this.props} />
          <FooterContainer
            {...this.props}
            state={this.state}
            boundHandleClickForApp={boundHandleClickForApp}
          />
        </HtmlContainer>
        <MagicScroller />
      </Fragment>
    );
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  setMagicOpacity() {
    let finalOpacity;
    const opacityValue = (this.scrollTop - 580) / (3221 - 580);
    const opacityToString = opacityValue + '';
    const opacityFailSafe =
      this.scrollTop < 15 && this.state.magicOpacity.opacity !== 0;

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
        magicOpacity: {
          opacity: finalOpacity
        }
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

  componentDidUpdate() {
    const location = splitPath(this.props);

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
  }
}

export default withRouter(App);
