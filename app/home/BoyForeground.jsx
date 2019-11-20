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
  opacity: ${p => (p.loadLevelFallback < 2 && p.loadLevelAll < 6) ? '0' : '1'};
  // Use p.exit as a test for 'ease-out', because it'll always be 'ease-in' when it's not true 
  // transition: ${p => css`opacity ${!p.homePageLoaded ? '1.75s cubic-bezier(0.77, 0, 0.175, 1)' : p.enter ? '1.1s ease-in' : '.9s ease-out'}`};
  z-index: 2;

  // Cut?
  // @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
  //   opacity: ${p => p.spellLevel > 0 ? '1' : '' };
  //   transition: ${p => p.spellLevel > 0 && 'unset'};
  // }
`;
