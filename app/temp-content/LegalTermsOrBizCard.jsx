import Clipboard from 'react-clipboard.js';
import StyledLink from '../primitives/StyledLink.jsx';
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import styled, { css } from 'styled-components';

const myEmailAddress = 'hello@jamesabels.net';
const PageCover = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color: ${p => !p.copying ? css`rgba(115, 192, 232, ${!p.home ? '.7' : '.2'})` : css`rgba(253, 17, 114, ${!p.home ? '.7' : '.2'})`};
  transition: background-color .75s;
  z-index: 1;
`;
const CardHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px; 
  left: 0px;
  bottom: 55px;
`;
const Card = styled.section`
  height: 160px;
  width: 275px;
  background-color: ${p => p.theme.colors.white};
  pointer-events: all;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 7px 7px 5px -1px rgba(0, 0, 0, 0.3);

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: 200px;
    width: 350px;
  }
`;
const StyledClipboardButton = styled(Clipboard)`
  border: ${p => p.businessCard ? `1px solid ${p.theme.colors.pink}` : 'none'};
  background-color: ${p => p.theme.colors.white};
  padding: 0px;
  height: 85%;
  width: 90%;
  display: flex;
  align-items: center;
  pointer-events: all;

  :active {
    // Ensures text is seen on button click in Safari
    color: black;
  }

  :focus {
    // Removese ugly grey outline in some browsers
    outline: 0px;
  }

  // .5px border line in older browsers:
  // https://stackoverflow.com/a/18997800

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
const Graf = styled.p`
  font-weight: 500;
  flex: 1;
  font-size: ${p => p.theme.fontSizes.six};
  margin-bottom: 0px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.ten};
  }
`;
const MyCopyright = styled.span`
  font-size: ${p => p.theme.fontSizes.three};
  display: block;
  margin-bottom: 3px;
  font-family: 'Montserrat', sans-serif;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.nine};
  }
`;
const ClipCopyright = styled.span`
  font-size: ${p => p.theme.fontSizes.zero};
  font-style: italic;
  font-family: 'Montserrat', sans-serif;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.two};
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
      ? <StyledLink
        style={{ color: 'black',
          textDecoration: 'underline'
        }}to="/journalism">clips</StyledLink>
      : 'clips';

    // The following HTML is span, not a <p>, b/c it's nested in
    // a <p> (React doesn't allow <p> nesting, kicks a warning).

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
        ? myEmailAddress
        : 'Copied!'
      : legalNotice;

    // StyledClipboardButton triggers success handler
    // AFTER it's copied something to the DOM. We
    // need to stop it from running if we want to
    // share it with legalTerms. Turns out, it
    // won't copy empty strings.

    const textToCopy = showBusinessCard
      ? myEmailAddress
      : '';

    const eventHandler = () => {
      if (showBusinessCard) {
        boundHandleClickForApp(
          'toggleBusinessCard'
        );
      } else {
        boundHandleClickForApp(
          'toggleLegalTerms'
        );
      }
    };
    const stopPropagation = event => event.stopPropagation();

    return (
      <PageCover
        home={homeIsActive}
        copying={copying && !showLegalTerms}
        onClick={eventHandler}
      >
        <CardHolder>
          <Card
            home={homeIsActive}
            reverie={reverieIsActive}
            onClick={stopPropagation}
          >
            <StyledClipboardButton
              businessCard={showBusinessCard}
              data-clipboard-text={textToCopy}
              reverie={reverieIsActive}
              onSuccess={
                () => {
                  // Must use 'this.props..' to get updated value
                  // after adding the listener to the Clipboard.
                  // There's a problem w/'this' otherwise.

                  if (
                    this.props.appState.showBusinessCard
                      && this.timeoutId === null
                  ) {
                    // Technically runs after the copy is made.

                    if (process.env.NODE_ENV !== 'development') {
                      ReactGA.event({
                        category: 'Legal terms state',
                        action: 'Copy email address'
                      });
                    }
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
              <Graf
                key={cardText}
                copying={
                  !showLegalTerms
                    && copying
                }
              >
                {cardText}
              </Graf>
            </StyledClipboardButton>
          </Card>
        </CardHolder>
      </PageCover>
    );
  }

  componentDidMount() {
    const { showBusinessCard } = this.props.appState;
    const { pathname } = window.location;

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.modalview(
        `${pathname}${
          showBusinessCard
            ? 'businesscard'
            : 'legalterms'
        }`
      );
    }
  }

  componentDidUpdate(prevProps) {
    const {
      showBusinessCard,
      showLegalTerms
    } = this.props.appState;
    const {
      businessCardWasActive,
      legalTermsWereActive
    } = prevProps.appState;
    const { pathname } = window.location;

    if (process.env.NODE_ENV !== 'development') {
      if (showBusinessCard && !businessCardWasActive) {
        ReactGA.modalview(
          `${pathname}businesscard`
        );
      } else if (showLegalTerms && !legalTermsWereActive) {
        ReactGA.modalview(
          `${pathname}legalterms`
        );
      }
    }
  }

  // Not added to ClickHandling. Dealing w/'this' binding
  // inside the class is a nightmare. K.I.S.S.

  makeCopies() {
    const { copying } = this.state;
    this.setState(
      {
        copying: !copying
      }
    );
  }
}
