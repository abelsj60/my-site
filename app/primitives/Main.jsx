import styled from 'styled-components';

export default styled.main`
  height: 0px; // Needed! https://moduscreate.com/blog/how-to-fix-overflow-issues-in-css-flex-layouts/
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  background-color: ${p => p.reverie ? '#d2e7ff' : 'white'};
  height: ${p => parseInt(p.theme.pageHeight) - 107}px;

  @media (min-width: 848px) {
    flex-direction: row;
  }
`;
