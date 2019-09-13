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
  opacity: ${p => p.boyIsLoading || p.fantasyIsLoading || p.inCity ? '0' : '1'};
  transform: ${p => p.inCity ? 'scale(1.35)' : 'scale(1)'};
  transform-origin: 50% 5%;
  transition: transform 1.75s, opacity 1.35s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: ${p => !p.inCity && p.spellLevel < 5 ? '0' : '-2'};
`;
