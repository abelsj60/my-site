import BusinessCard from './BusinessCard.jsx';
import LegalTerms from './LegalTerms.jsx';
import React, { Component } from 'react';
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
    //     boundHandleClickForApp('updateTempContent', 1);
    //   } else {
    //     boundHandleClickForApp('updateTempContent', 2);
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
}
