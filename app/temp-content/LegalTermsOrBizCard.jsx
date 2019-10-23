import BusinessCard from './BusinessCard.jsx';
import LegalTerms from './LegalTerms.jsx';
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import styled, { css } from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color: ${css`rgba(115, 192, 232, ${p => !p.homeIsActive ? '.7' : '.2'})}`};
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
  background-color: ${p => p.theme.colors.pink};
  box-shadow: 7px 7px 5px -1px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: 200px;
    width: 350px;
  }
`;

export default class LegalTermsOrBizCard extends Component {
  render() {
    if (this.props.appState.tempContent < 1 || this.props.appState.tempContent > 2) {
      return null;
    }

    const {
      appState,
      boundHandleClickForApp
    } = this.props;
    const {
      currentCaller,
      tempContent
    } = appState;
    const homeIsActive = currentCaller === 'home';

    // REACTIVATE to allow temp content to be closed by clicking the page:
    // const stopOnClickPropagation = event => event.stopPropagation();
    // const onClickHandler = () => {
    //   if (tempContent === 1) {
    //     boundHandleClickForApp('toggleTempContent', 1);
    //   } else {
    //     boundHandleClickForApp('toggleTempContent', 2);
    //   }
    // };
    
    return (
      <Container
        homeIsActive={homeIsActive}
        // onClick={onClickHandler} // See note, above
      >
        <CardHolder>
          <Card
            // onClick={stopOnClickPropagation} // See note, above
            tempContent={tempContent}
          >
            {tempContent === 1 ? (
              <BusinessCard 
                {...this.props}
              />
            ) : (
              <LegalTerms 
                {...this.props}
              />
            )}
          </Card>
        </CardHolder>
      </Container>
    );
  }

  // Needed ? Or handled in clickHandling?
  componentDidMount() {
    const { tempContent } = this.props.appState;
    const { pathname } = window.location;

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.modalview(
        `${pathname}${
          tempContent === 1
            ? 'Switch to business card'
            : 'Switch to terms'
        }`
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { tempContent } = this.props.appState;
    const { lastTempContent } = prevProps.appState;
    const { pathname } = window.location;

    if (process.env.NODE_ENV !== 'development') {
      if (tempContent === 1 && lastTempContent === 0) {
        ReactGA.modalview(`${pathname}businesscard`);
      } else if (tempContent === 2 && lastTempContent === 0) {
        ReactGA.modalview(`${pathname}legalterms`);
      }
    }
  }
}
