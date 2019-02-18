import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  margin: 25px ${p => (p.rightMargin && 25) || 0}px 25px 25px;
`;
