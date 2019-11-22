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
  // Never transition it in, its entrance is hidden by the fallback image.
  opacity: ${p => !p.homePageLoaded && p.loadLevel < 2 ? '0' : '1'};
  z-index: 2;
`;
