import styled from 'styled-components';

export default styled.section`
  margin: 10px 0px 25px 25px;
  // margin: 10px 0px 25px 23px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media (min-width: ${p => p.theme.mediaQueries.desktopView}) {
    margin-top: 25px;
  }
`;
