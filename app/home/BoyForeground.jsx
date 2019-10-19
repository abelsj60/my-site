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
  // We rely on !p.finishedHomePageLoad to ensure the associated test only runs on initialLoad. It should not be considered thereafter.
  opacity: ${p => (!p.finishedHomePageLoad && p.loadLevelAll < 6 ? '0' : '1')};
  transition: ${p => css`opacity ${!p.finishedHomePageLoad ? '.7s ease-in' : p.enter ? '1.1s ease-in' : '.9s ease-out'}`};
  z-index: 2;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    opacity: ${p => p.spellLevel > 0 ? '1' : '' };
    transition: ${p => p.spellLevel > 0 && 'unset'};
  }
`;
