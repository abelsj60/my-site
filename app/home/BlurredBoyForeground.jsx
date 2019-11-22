import React from 'react';
import styled, { css } from 'styled-components';

export default styled.img`
  display: none;
  
  @media (orientation: landscape) and (max-height: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    display: block;
    position: absolute;
    object-fit: cover;
    font-family: 'object-fit: cover;';
    // Scale image to fully fit element: https://stackoverflow.com/a/28439444
    width: 100%;
    height: 100%;
    pointer-events: none;
    // Opacity is 1 on short screens b/c the charms and fairy overlap.
    opacity: ${p => !p.theme.blurForTempContent && (p.enter && p.spellLevel >= 2 && p.spellLevel < 5) || (p.exit && p.spellLevel > 2) ? '1' : '0' };
    // No transition when spellLevel is 4 (Charms) because we don't want it to blur back in when tempContent is shut off.
    // Transition settings should match blurred forrest or NYC for use on narrow landscape screens.
    transition: ${p => !p.theme.blurForTempContent && (p.spellLevel > 0 && p.spellLevel < 4) && css`opacity .65s ease-in-out`};
    z-index: 3;
  }
`;
