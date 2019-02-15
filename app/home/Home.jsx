import React from 'react';
import styled from 'styled-components';

import Main from '../primitives/Main.jsx';
import Hed from '../primitives/Hed.jsx';
import Graf from '../primitives/Graf.jsx';
import Button from '../shared/Button.jsx';

const RestyledMain = styled(Main)`
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 848px) {
    flex-direction: column;
  }
`;
const NameTag = styled.div`
  display: ${p => (p.tempContentIsOn ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 20px;
`;
const RestyledHed = styled(Hed)`
  font-family: Kaushan Script, cursive;
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1px 1px 2px black;
`;
const RestyledGraf = styled(Graf)`
  text-shadow: 1px 1px 2px black;
  margin-left: 16px;
`;
const BoyInForeground = styled.img`
  position: absolute;
  bottom: 0;
  align-self: center;
  object-fit: cover;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;
const FantasyAsBackground = styled(BoyInForeground)`
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? 'scale(1)' : 'scale(1.15)')};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
`;
const CityAsBackground = styled(FantasyAsBackground)`
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? 'scale(1.15)' : 'scale(1)')};
`;
const TravelButton = styled(Button)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 0.5px solid white;
  border-radius: 5px;
  color: white;
  display: ${p => (p.tempContentIsOn ? 'none' : 'block')};
  font-size: 1.3rem;
  margin-bottom: 45px;
  z-index: 2;
`;

export default function Home(props) {
  const { inCity, showBusinessCard, showLegalTerms } = props.appState;
  const { boundHandleClickForApp } = props;
  const travelButtonText = inCity ? 'Home' : 'Away';

  return (
    <RestyledMain>
      <NameTag tempContentIsOn={showBusinessCard || showLegalTerms}>
        <RestyledHed size="6.5" color="yellow">
          James Abels
        </RestyledHed>
        <RestyledGraf size="1.65" color="pink" top="-15">
          coding narratives and magical adventures
        </RestyledGraf>
      </NameTag>
      <BoyInForeground src="/foreground.png" alt="the boy looks out" />
      <FantasyAsBackground
        alt="the boy builds a fantasy world"
        src="/background-fantasy.png"
        inCity={inCity}
      />
      <CityAsBackground
        alt="the boy sees a city view"
        src="/background-city.png"
        inCity={inCity}
      />
      <TravelButton
        className="travel-button"
        clickFunction={() => boundHandleClickForApp('swapHomePageImage')}
        tempContentIsOn={showBusinessCard || showLegalTerms}
        text={travelButtonText}
      />
    </RestyledMain>
  );
}
