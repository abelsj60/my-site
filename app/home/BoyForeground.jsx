import React from 'react';
import styled, { css } from 'styled-components';

export default styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  font-family: 'object-fit: cover;';
  // Scale image to fully fit element: https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  // Only hidden during the initial stages of the load. It's always visible thereafter. 
  // Mac OS Safari (not the technology preview) causes all kinds of grief. On first load 
  // (clear cache), the boy is painted to screen suddenly, after the fallback has started 
  // fading away. The effect is jarring b/c the red, red forrest fully visible beneath 
  // it for a split second. This behavior persists as long as the forrest is kept at 
  // opacity 0 before loadLevel 2. The solution is a hack, but it does seem to work.
  // We'll turn off opacity on loadLevel 1 (usually it's two), and we'll transition
  // it off with a short delay so it's effectvely hidden while the fallback fades
  // into place. Then we're good to go...
  ${p => !p.homePageLoaded && css`opacity: ${(p.loadLevel < (!p.isMobile && p.isSafari ? 1 : 2)) ? '0' : '1'};`}
  // See the note above on Mac OS Safari for a discussion of the following transition:
  ${p => !p.isMobile && p.isSafari && 'transition: opacity .1s .7s ease-in-out;'}
  z-index: 2;
`;
