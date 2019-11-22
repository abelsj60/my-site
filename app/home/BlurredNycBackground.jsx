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
  opacity: ${p => p.theme.blurForTempContent || (p.enter && p.spellLevel >= 2) || (p.exit && p.spellLevel > 2) ? '1' : '0'};
  // Transition settings should match blurred boy for use on narrow landscape screens.
  transition: ${p => p.spellLevel > 0 && 'opacity .65s ease-in-out'};
  z-index: ${p => !p.inCity && p.spellLevel < 5  ? '-1' : '1'};
  ${p => (p.spellLevel === 5  || !p.inCity) && 'display: none;'}
`;
