import React from 'react';
import styled from 'styled-components';

// On scrollbars: 
//  1. https://stackoverflow.com/a/25561646
//  2. https://stackoverflow.com/a/23771140
//  3. https://www.filamentgroup.com/lab/scrollbars/

export default styled.div`
  overflow: auto;
  padding-right: 25px; // Places scrollbar on right edge.
  // Handle scrollbar (non-standard properties).
  // FireFox:
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  // EdgeHTML, IE:
  -ms-overflow-style: -ms-autohiding-scrollbar;
  // Webkit (chrome, safari, Chromium-Edge):
  -webkit-overflow-scrolling: touch;

  // Check Chromium Edge, check EdgeHMTL on native machine?
  // Detect when always on scrollbar?

  &::-webkit-scrollbar {
    height: .2rem;
    width: .2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .2);
    /* Add :hover, :active as needed */
  }

  &::-webkit-scrollbar-thumb:vertical {
    min-height: 1.5rem;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    min-width: 1.5rem;
  }
`;
