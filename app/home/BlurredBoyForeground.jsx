import React from 'react';
import styled from 'styled-components';

export default styled.img`
  position: absolute;
  display: none;
  object-fit: cover; // Use if using <img>
  font-family: 'object-fit: cover;';
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;

@media (orientation: landscape) and (max-height: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    display: block;
    // Opacity is 1 on short screens b/c the charms and fairy overlap.
    opacity: ${p => !p.theme.blurForTempContent && (p.enter && (p.spellLevel >= 2 && p.spellLevel < 5)) || (p.exit && p.spellLevel > 2) ? '.75' : '0' };
    // No transition when spellLevel is 4 (Charms are running) b/c we don't want to transition back in when tempContent is shut off   
    transition: ${p => !p.theme.blurForTempContent && (p.spellLevel > 0 && p.spellLevel < 4) && `opacity ${p.spellLevel > 0 ? '.65s' : '1s'} ease-in`};
    z-index: 3;
  }
`;
