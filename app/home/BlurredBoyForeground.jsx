import React from 'react';
import styled from 'styled-components';

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
  opacity: ${p => p.boyIsLoading || p.fantasyIsLoading || p.theme.blurForTempContent || (p.spellLevel < 5 && (p.enter && p.spellLevel >= 2) || (p.exit && p.spellLevel > 2)) ? '1' : '0'};
  // opacity: ${p => (p.finishedHomePageLoad && p.spellLevel > 0) ? '1' : '0'};
  z-index: 3;
  // Note: Only one transition resolves true at a time
  transition: ${p => !p.finishedHomePageLoad && 'opacity .75s'};
  transition: ${p => (p.finishedHomePageLoad && (p.spellLevel > 0 && p.spellLevel < 5)) ? 'opacity .55s ease-in' : ''};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    opacity: ${p => (p.finishedHomePageLoad && p.spellLevel > 0) ? 0 : '' };
    transition: unset;
  }
`;
