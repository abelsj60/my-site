import styled from 'styled-components';

export default styled.main`
  height: 0px; // Needed! https://moduscreate.com/blog/how-to-fix-overflow-issues-in-css-flex-layouts/
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${p => p.reverie ? p.theme.colors.reverieBlue : p.theme.colors.white};
  height: ${p => parseInt(p.theme.pageHeight) - 107}px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  width: 100%;
  max-width: 70rem;
`;
