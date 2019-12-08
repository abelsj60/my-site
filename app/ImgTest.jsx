import Main from './primitives/Main.jsx';
import React from 'react';
import styled from 'styled-components';
import urlPrefix from './helpers/urlPrefix';

const RestyledMain = styled(Main)`
  justify-content: flex-start;
  align-items: center;
  // overflow: hidden;
  flex-direction: column;
  position: relative;
`;
const PictureHolder = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  filter: ${p => p.theme.blurForTempContent && p.theme.blur};
  z-index: 1;
`;
const BoyForeground = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  font-family: 'object-fit: cover;';
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
`;
const ForrestBackground = styled.img`
  position: absolute;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export default function(props) {
  const boyWidth = '3000';
  const forrestWidth = '2880';
  const boySrc = `${urlPrefix}/home-boy/boy-imc-main-101419-${boyWidth}.png`;
  const bigForrestSrc = `${urlPrefix}/home-forrest/forrest-imc-main-101419-q50-${forrestWidth}.jpg`
  return (
    <RestyledMain>
      <PictureHolder>
        <BoyForeground
          onError={() => consle.log('error in BoyForeground')}
          src={boySrc}
        />
        <ForrestBackground
          onError={() => console.log('error in ForrestBackground')}
          src={bigForrestSrc}
        />
      </PictureHolder>
    </RestyledMain>
  );
}
