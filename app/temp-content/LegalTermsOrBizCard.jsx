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
  top: ${p => (!p.home ? '52px' : '0px')};
  bottom: ${p => !p.home ? '55px' : '0px'};
  // top: 0px;
  // bottom: 0px;
  width: 100%;
  background-color: ${p => !p.copying ? 'rgba(0, 0, 0, 0.7)' : 'rgba(253,17,114, 0.7)'};
  transition: background-color .75s;
  z-index: 1;

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
  background-color: ${p => p.reverie ? '#d2e7ff' : 'white'};
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
  box-shadow: 7px 7px 5px -1px rgba(0, 0, 0, 0.3);
`;
const StyledClipboardButton = styled(Clipboard)`
  border: ${p => p.businessCard ? '1px solid #fd1172' : 'none'};
  background-color: ${p => p.reverie ? '#d2e7ff' : 'white'};
  padding: 0px;
  height: 85%;
  width: 90%;
  display: flex;
  align-items: center;
  pointer-events: all;

  :focus {
    outline: 0px;
  }

  https://stackoverflow.com/a/18997800
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border: 1px #999 solid;;
    transform: scale(0.5);
  }
`;
const RestyledGraf = styled(Graf)`
  // height: 100%;
  flex: 1;
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (min-width: 400px) {
    font-size: 1.4rem;
  }
`;
const MyCopyright = styled.span`
  display: block;
  margin-bottom: 5px;
`;
const ClipCopyright = styled.span`
  font-size: .9rem;
  font-style: italic;

  @media (min-width: 390px) {
    font-size: 1rem;
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
    const reverieIsActive = currentCaller === 'reverie';

    // Styled as attribute for simplicity,
    // breaking it out above's a headache
    const linkOrTextForClips = currentCaller !== 'journalism'
      ? <StyledLink style={{
        color: 'black',
        textDecoration: 'underline'
      }} to="/journalism">
      clips</StyledLink>
      : 'clips';

    // The following HTML is span, not a <p>, b/c it's nested in
    // a <p> (React doesn't allow <p> nesting, kicks a warning)
    const legalNotice =
      <span>
        <MyCopyright>
          © {new Date().getFullYear()}, James Abels. All rights reserved.
        </MyCopyright>
        <ClipCopyright>
          (All {linkOrTextForClips} owned by their respective publisher.)
        </ClipCopyright>
      </span>;

    // Real email address shouldn't be a problem here b/c it isn't
    // on a real route. It'd be hard to scrape w/o special effort.
    const cardText = showBusinessCard
      ? !copying
        ? 'abelsj60@gmail.com'
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
                    data-friction-x=".5"
                    data-friction-y=".5"
                    data-limit-x="2" // Value unclear
                    data-limit-y="2" // Value unclear
                    home={homeIsActive}
                    reverie={reverieIsActive}
                  >
                    <CardContentArea>
                      <StyledClipboardButton
                        businessCard={showBusinessCard}
                        data-clipboard-text={textToCopy}
                        reverie={reverieIsActive}
                        onSuccess={
                          () => {
                            // Use this.props... so the value's updateed
                            // after the listener's added to Clipboard.
                            // There's a problem w/'this' otherwise.
                            if (
                              this.props.appState.showBusinessCard
                                && this.timeoutId === null
                            ) {
                              // Runs after copy is made!
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
