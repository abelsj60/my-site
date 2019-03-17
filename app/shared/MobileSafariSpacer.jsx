import Graf from '../primitives/Graf.jsx';
import { isMobileSafari } from 'react-device-detect';
import Location from '../classes/Location.js';
import React from 'react';
import ScrollHandling from '../classes/ScrollHandling.js';
import styled from 'styled-components';

const SpacerForMobileSafari = styled.div`
  height: 74px; 
  background-color: #fd1172;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextForMobileSafariSpacer = styled(Graf)`
  max-width: 70%; 
  text-align: center;
`;

export default function MobileSafariSpacer(props) {
  if (!isMobileSafari) return null;

  const location = new Location('/', props);
  const scrollHandler = new ScrollHandling(location);
  const textForSafariSpacer = "Pay me no mind. I'm just a magic spacer for Safari. Tap a couple times to hide me...!";

  return (
    <SpacerForMobileSafari
      onClick={
        () => scrollHandler.resetMobileSafariTop()
      }
    >
      <TextForMobileSafariSpacer
        c="yellow"
        s="1.2"
      >
        {textForSafariSpacer}
      </TextForMobileSafariSpacer>
    </SpacerForMobileSafari>);
}
