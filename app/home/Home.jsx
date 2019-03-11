// import Button from '../shared/Button.jsx';
import Graf from '../primitives/Graf.jsx';
import Hed from '../primitives/Hed.jsx';
import Main from '../primitives/Main.jsx';
import Parallax from '../shared/Parallax.jsx';
import React from 'react';
import styled from 'styled-components';

const RestyledMain = styled(Main)`
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  // height: 100%;
  // width: 100%;

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
  margin-top: 10px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  @media (min-width: 390px) {
    margin-top: 20px;
  }

  // @media (min-width: 848px) {
  //   margin-top: 30px;
  // }
`;
const RestyledHed = styled(Hed)`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1px 1px 2px black;

  @media (min-width: 390px) {
    font-size: 6rem;
  }
`;
const RestyledGraf = styled(Graf)`
  text-shadow: 1px 1px 2px black;
  margin-left: 18px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
const PictureBox = styled.div`
  position: absolute;
  top: 0px;
`;
const Portal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 1;
`;
const BoyInForeground = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100vh;
  min-width: 100vw;
  z-index: 1;
  pointer-events: none;
`;
const FantasyAsBackground = styled(BoyInForeground)`
  position: unset;
  left: 0px;
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? 'scale(1)' : 'scale(1.15)')};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
`;
const CityAsBackground = styled(FantasyAsBackground)`
  position: absolute;
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? 'scale(1.15)' : 'scale(1)')};
`;

export default function Home(props) {
  const {
    inCity,
    showBusinessCard,
    showLegalTerms
  } = props.appState;
  const {
    boundHandleClickForApp
  } = props;

  return (
    <RestyledMain>
      <Parallax
        render={
          renderProps => (
            <NameTag
              ref={
                el => {
                  renderProps.scene = el;
                }
              }
              onClick={
                () => boundHandleClickForApp('swapHomePageImage')
              }
              data-pointer-events={true}
              tempContentIsOn={showBusinessCard || showLegalTerms}
            >
              <RestyledHed c="yellow" data-depth=".3" s="4.5" bS="6.5">
                JamesAbels
              </RestyledHed>
              <RestyledGraf c="pink" data-depth=".3" s="1.5" t="64" bS="1.7" bT="93">
                Coding narratives and more
              </RestyledGraf>
            </NameTag>
          )
        }
      />
      <PictureBox>
        <BoyInForeground alt="the boy looks out" src="/foreground.png" />
        <Portal />
        <FantasyAsBackground
          alt="the boy builds a fantasy world"
          inCity={inCity}
          src="/background-fantasy.png"
        />
        <CityAsBackground
          alt="the boy sees a city view"
          inCity={inCity}
          src="/background-city.png"
        />
      </PictureBox>
    </RestyledMain>
  );
}
