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
  opacity: ${p => !p.finishedHomePageLoad && p.loadLevelAll < 6 ? '0' : '1'};
  transition: ${p => !p.finishedHomePageLoad && 'opacity 1s ease-in'};
  z-index: 2;
`;
