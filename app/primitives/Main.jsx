import styled from 'styled-components';

export default styled.main`
  height: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;

  @media (min-width: 848px) {
    flex-direction: unset;
  }
`;
