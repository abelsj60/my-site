import BusinessCard from './BusinessCard.jsx';
import LegalTerms from './LegalTerms.jsx';
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${p => p.homeIsActive || p.illustrationLevel > 2 ? '0px' : '52px'};
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color: rgba(115, 192, 232, .7);
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
  ${p => p.illustrationLevel > 2 && 'margin-top: 52px;'}

  @media (orientation: landscape) and (max-height: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    // Opacity is 1 on short screens when the charms and fairy overlap.
    // Transition triggered by above styling rules so orientation changes benefit from it.
    margin-top: ${p => p.homeIsActive && '52px'};
  }
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
    } = this.props;
    const {
      currentCaller,
      illustrationLevel,
      tempContent
    } = appState;
    const homeIsActive = currentCaller === 'home';
    
    return (
      <Container
        homeIsActive={homeIsActive}
        illustrationLevel={illustrationLevel}
      >
        <CardHolder
          homeIsActive={homeIsActive}
          illustrationLevel={illustrationLevel}
        >
          <Card
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
}
