import styled from 'styled-components';

export default styled.main`
  height: 0px; // https://moduscreate.com/blog/how-to-fix-overflow-issues-in-css-flex-layouts/
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  width: 100%;
  max-width: ${p => !p.home ? '70rem' : ''};
`;
