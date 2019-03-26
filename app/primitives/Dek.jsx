import styled from 'styled-components';

export default styled.h2`
  font-size: ${p => p.fontSize && p.theme.fontSizes[p.fontSize]};
  color: ${p => p.theme.colors[p.color]};
  margin-bottom: ${p => p.bottom && p.bottom + 'px'};
  font-weight: ${p => p.weight && p.weight};
`;
