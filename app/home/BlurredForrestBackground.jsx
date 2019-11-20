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
  // We rely on !p.homePageLoaded to ensure the associated test only runs on initialLoad. It should not be considered thereafter.
  opacity: ${p => (!p.homePageLoaded && p.loadLevelBlurs >= 2 && p.loadLevelAll < 6) || p.theme.blurForTempContent || (p.enter && p.spellLevel >= 2) || (p.exit && p.spellLevel > 2) ? '1' : '0'};
  transition: ${p => !p.homePageLoaded || p.spellLevel > 0 ? `opacity ${p.spellLevel > 0 ? '.65s' : '1s'} ease-in` : ''};
  z-index: ${p => !p.inCity && p.spellLevel < 5 ? '1' : '-1'};
  ${p => (p.spellLevel === 5 || p.inCity) && 'display: none'};
`;
