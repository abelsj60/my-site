import styled from 'styled-components';

export default styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 848px) {
    flex-direction: unset;
  }
`;
