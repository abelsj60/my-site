import React from 'react';
import styled from 'styled-components';

export default styled.img`
  position: absolute;
  display: block;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  // Only hidden during the initial stages of the load. It's always visible thereafter. 
  // Only transition when casting spells (first entrance hidden by fallback image).
  opacity: ${p => (!p.homePageLoaded && p.loadLevel < 2) || (p.homePageLoaded && p.inCity) ? '0' : '1'};
  transform: ${p => p.inCity ? 'scale(1.35)' : 'scale(1)'};
  transform-origin: 50% ${p => p.inCity ? '-3%' : '-6%'};
  // Transition used for background swap. Opacity bezier curve should match that used by NycBackground.
  transition: ${p => p.spellLevel > 0 && 'transform 1.75s, opacity 1.35s cubic-bezier(0.77, 0, 0.175, 1)'};
  z-index: ${p => !p.inCity && p.spellLevel < 5 ? '0' : '-2'};
`;
