import styled from 'styled-components';

export default styled.h2`
  font-weight: 400;
  font-size: 1.35rem;
  color: ${p => p.theme.colors[p.color]};
  margin-bottom: 2px;

  @media (min-width: 390px) {
    font-size: 1.45rem;
  }
`;
