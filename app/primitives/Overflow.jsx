import styled from 'styled-components';

// Need right padding to get scroll on right edge

export default styled.div`
  overflow: auto;

  @media (min-width: 390px) {
    padding-right: 25px;
  }
`;
