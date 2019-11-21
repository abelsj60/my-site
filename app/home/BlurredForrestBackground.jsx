import React from 'react';
import styled, { css } from 'styled-components';

export default styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  font-family: 'object-fit: cover;';
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  will-change: opacity;
  // We use !p.homePageLoaded to limit this fade to initialLoad, it shouldn't be used for internal navigation.
  opacity: ${p => (!p.homePageLoaded && p.loadLevel === 1) || p.theme.blurForTempContent || (p.enter && p.spellLevel >= 2) || (p.exit && p.spellLevel > 2) ? '1' : '0'};
  transition: ${p => !p.homePageLoaded || p.spellLevel > 0 ? css`opacity ${p.spellLevel > 0 ? '.65s' : '1s'} ease-in` : ''};
  z-index: ${p => !p.inCity && p.spellLevel < 5 ? '1' : '-1'};
  ${p => (p.spellLevel === 5 || p.inCity) && 'display: none'};
`;
