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
  // We use !p.homePageLoaded to ensure that this test only runs on initialLoad.
  opacity: ${p => (!p.homePageLoaded && p.loadLevel === 1) ? '1' : '0'};
  // No transition when spellLevel is 4 (Charms) because we don't want it to blur back in when tempContent is shut off
  transition: ${p => !p.theme.blurForTempContent && (!p.homePageLoaded || (p.spellLevel > 0 && p.spellLevel < 4)) && css`opacity ${p.spellLevel > 0 ? '.65s' : '1s'} ease-in`};
  z-index: 3;

  @media (orientation: landscape) and (max-height: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    // Opacity is 1 on short screens when the charms and fairy overlap.
    // Transition triggered by above styling rules so orientation changes benefit from it.
    opacity: ${p => (!p.homePageLoaded && p.loadLevel === 1) ? '1' : (!p.theme.blurForTempContent && (p.enter && p.spellLevel >= 2 && p.spellLevel < 5) || (p.exit && p.spellLevel > 2)) ? '.75' : '0' };
  }
`;
