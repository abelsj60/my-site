import React from 'react';
import styled from 'styled-components';

/* On scrollbars: 

  1. Mac OS 
    A. Shows unobtrusive scrollbars on scroll if general settings are set to:
      -Automatically based on mouse or trackpad
      -When scrolling
    B. Shows obtrusive scrollbars (take up space) if general settings are set to:
      -Always
        -CSS can be used to style these scrollbars on load, but not therefter.
        -Downside: The scrollbars will always be displayed if yoiu do this.

          CSS:
            &::-webkit-scrollbar {
                height: .2rem;
                width: .2rem;
              }

              &::-webkit-scrollbar-track {
                background-color: transparent;
              }

              &::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, .2);
              }

              &::-webkit-scrollbar-thumb:vertical {
                min-height: 1.5rem;
              }

              &::-webkit-scrollbar-thumb:horizontal {
                min-width: 1.5rem;
              }
  2. Windows
    -Scrollbars will always show up.
    -Use nonstandards track CSS to autohide them when possible:
      -ms-overflow-style: -ms-autohiding-scrollbar;
      -Above CSS seems to have no effect on style.
  
  3. Great links for more:
    1. https://stackoverflow.com/a/25561646
    2. https://stackoverflow.com/a/23771140
    3. https://www.filamentgroup.com/lab/scrollbars/
*/

export default styled.div`
  overflow: auto;
  padding-right: 25px; // Places scrollbar on right edge.
  // FireFox, a little styling, why not?
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  // EdgeHTML, IE, hide scrollbars when not in use.
  -ms-overflow-style: -ms-autohiding-scrollbar;
  // Webkit (chrome, safari, Chromium-Edge), better scrolling.
  -webkit-overflow-scrolling: touch;
`;
