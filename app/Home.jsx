import React from 'react';
import styled from 'styled-components';

import FantasticImage from './FantasticImage.jsx';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const MagicImage = styled.img`
  opacity: ${p => (p.pointsUnknown ? '0' : '1')};
  transform: ${p => (p.pointsUnknown ? 'scale(1.01)' : 'scale(1.035)')};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  position: fixed;
  bottom: 0;
  align-self: center;
  object-fit: cover;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  // z-index: 1;
`;
const MyName = styled.h1`
  margin: 0px;
  font-family: Kaushan Script, cursive;
  font-family: 'Aref Ruqaa', serif;
  font-size: 6.5rem;
  color: #ffe74c;
  text-shadow: 1px 1px 2px black;
`;
const Motto = styled.p`
  margin: 0px;
  // font-family: Merienda, cursive;
  font-size: 1.65rem;
  color: #fd1172;
  text-shadow: 1px 1px 2px black;
  margin-top: -15px;
  margin-left: 16px;
`;
const FlyButton = styled.section`
  z-index: 2;
  font-size: 1.3rem;
  border-radius: 5px;
  width: 80px;
  color: white;
  padding: 10px;
  text-shadow: 1px 1px 2px black;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 45px;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 20px;
`;

export default function Home(props) {
  const { pointsUnknown, currentCaller } = props.state;
  const { boundHandleClickForApp } = props;
  const nextFlight = currentCaller === 'home' && pointsUnknown ? 'home' : '';
  const buttonLocation = pointsUnknown ? 'New York' : 'Neverland';

  return (
    <Main>
      <LogoContainer nextFlight={nextFlight}>
        <MyName>James Abels</MyName>
        <Motto>coding narratives and magical adventures</Motto>
      </LogoContainer>
      <img
        style={{
          position: 'absolute',
          bottom: '0',
          alignSelf: 'center',
          objectFit: 'cover',
          minHeight: '100%',
          width: '100%',
          overflow: 'hidden',
          zIndex: '1'
        }}
        src="/foreground.png"
      />
      <FantasticImage pointsUnknown={pointsUnknown} />
      <FlyButton onClick={() => boundHandleClickForApp('swapHomePageImage')}>
        {buttonLocation}
      </FlyButton>
      <MagicImage
        src="/background-city.png"
        alt="a fantastic imaginary world"
        pointsUnknown={pointsUnknown}
      />
    </Main>
  );
}
