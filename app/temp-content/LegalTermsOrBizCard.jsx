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
  background-color: ${p => p.showBusinessCard ? p.theme.colors.pink : p.theme.colors.pink};
  box-shadow: 7px 7px 5px -1px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: 200px;
    width: 350px;
  }
`;

export default class LegalTermsOrBizCard extends Component {
  render() {
    if (
      !this.props.appState.showBusinessCard
        && !this.props.appState.showLegalTerms
    ) return null;

    const {
      appState,
      boundHandleClickForApp
    } = this.props;
    const {
      showBusinessCard,
      currentCaller
    } = appState;
    const homeIsActive = currentCaller === 'home';
    const stopPropagation = event => event.stopPropagation();
    const eventHandler = () => {
      if (showBusinessCard) {
        boundHandleClickForApp('toggleBusinessCard');
      } else {
        boundHandleClickForApp('toggleLegalTerms');
      }
    };
    
    return (
      <Container
        homeIsActive={homeIsActive}
        onClick={eventHandler}
      >
        <CardHolder>
          <Card
            showBusinessCard={showBusinessCard}
            onClick={stopPropagation}
          >
            {showBusinessCard ? (
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
        ReactGA.modalview(`${pathname}businesscard`);
      } else if (showLegalTerms && !legalTermsWereActive) {
        ReactGA.modalview(`${pathname}legalterms`);
      }
    }
  }
}
