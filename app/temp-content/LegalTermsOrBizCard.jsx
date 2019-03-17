import Clipboard from 'react-clipboard.js';
import Graf from '../primitives/Graf.jsx';
import StyledLink from '../primitives/StyledLink.jsx';
import Parallax from '../shared/Parallax.jsx';
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${p => (p.home ? '0' : '52px')};
  bottom: ${p => (p.home ? '0' : '54px')};
  width: 100%;
  background-color: ${p => !p.copying ? 'rgba(0, 0, 0, 0.7)' : 'rgba(253,17,114, 0.7)'};
  transition: background-color .75s;

  ${p =>
    p.home
    && css`
      z-index: 1;
      background-color: ${!p.copying ? 'rgba(0, 0, 0, 0.35)' : 'rgba(255,231,76, 0.25)'};`};
`;
const CardHolder = styled.div`
  display: flex;
  justifyContent: center;
`;
const InnerContainer = styled.div`
  margin-top: ${p => (p.home ? '-135px' : undefined)};
  `;
const Card = styled.section`
  height: 160px;
  width: 275px;
  background-color: white;
  pointer-events: all;

  @media (min-width: 400px) {
    height: 200px;
    width: 350px;
  }
`;
const CardContentArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const RestyledGraf = styled(Graf)`
  white-space: pre-wrap;
  height: 100%;
  flex: 1;
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (min-width: 400px) {
    font-size: 1.4rem;
  }
`;
const StyledClipboardButton = styled(Clipboard)`
  border: ${p => p.businessCard ? '0.5px solid #fd1172' : 'unset'};
  padding: 0px;
  height: 85%;
  width: 90%;
  display: flex;
  pointer-events: all;

  :focus {
    outline: 0px;
  }
`;

export default class LegalTermsOrBizCard extends Component {
  constructor(props) {
    super(props);

    this.timeoutId = null;

    this.state = {
      copying: false
    };

    this.makeCopies = this.makeCopies.bind(this);
  }

  render() {
    if (
      !this.props.appState.showBusinessCard
        && !this.props.appState.showLegalTerms
    ) return null;

    const {
      makeCopies,
      state
    } = this;
    const {
      copying
    } = state;
    const {
      appState,
      boundHandleClickForApp
    } = this.props;
    const {
      showBusinessCard,
      showLegalTerms,
      currentCaller
    } = appState;

    const homeIsActive = currentCaller === 'home';
    const legalNotice =
      <span>
        <span style={{ marginBottom: '5px', display: 'block' }}>©
          {new Date().getFullYear()}, James Abels. All rights reserved.
        </span>
        <span style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
          (All <a style={{ color: 'black' }} href="/journalism" target="_blank">
          clips</a> owned by their respective publisher.)
        </span>
      </span>;
    const cardText = showBusinessCard
      ? !copying
        ? 'abelsj60_at_gmail.com'
        : 'Copied!'
      : legalNotice;

    // StyledClipboardButton triggers success handler
    // AFTER it's copied something to the DOM. So, we
    // need to prevent its operation if we want to
    // share this component with legalTerms. Turns
    // out, it won't copy empty strings.
    const textToCopy = showBusinessCard
      ? 'abelsj60@gmail.com'
      : '';

    return (
      <Container
        home={homeIsActive}
        copying={copying && !showLegalTerms}
        onClick={
          () => {
            if (showBusinessCard) {
              boundHandleClickForApp(
                'toggleBusinessCard'
              );
            } else {
              boundHandleClickForApp(
                'toggleLegalTerms'
              );
            }
          }
        }
      >
        <CardHolder>
          <Parallax
            render={
              renderProps => (
                <InnerContainer
                  home={homeIsActive}
                  ref={
                    ref => (renderProps.scene = ref)
                  }
                  onClick={
                    event => event.stopPropagation()
                  }
                >
                  <Card
                    data-depth="1"
                    home={homeIsActive}
                  >
                    <CardContentArea>
                      <StyledClipboardButton
                        businessCard={showBusinessCard}
                        data-clipboard-text={textToCopy}
                        onSuccess={
                          () => {
                            // Use this.props... so the value's updateed
                            // after the listener's added to Clipboard.
                            // There's a problem w/'this' otherwise.
                            if (
                              this.props.appState.showBusinessCard
                                && this.timeoutId === null
                            ) {
                              makeCopies();
                              this.timeoutId = setTimeout(
                                () => {
                                  this.timeoutId = null;
                                  makeCopies();
                                }, 1150
                              );
                            }
                          }
                        }
                      >
                        <RestyledGraf
                          key={cardText}
                          copying={
                            !showLegalTerms
                            && copying
                          }
                        >
                          {cardText}
                        </RestyledGraf>
                      </StyledClipboardButton>
                    </CardContentArea>
                  </Card>
                </InnerContainer>
              )
            }
          />
        </CardHolder>
      </Container>
    );
  }

  // Not added to ClickHandling. Dealing w/'this'
  // binding inside the class is nightmarish.
  // K.I.S.S.
  makeCopies() {
    const { copying } = this.state;
    this.setState(
      {
        copying: !copying
      }
    );
  }
}
