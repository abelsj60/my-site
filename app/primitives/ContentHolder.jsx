import styled from 'styled-components';

export default styled.section`
  margin: 25px 0px 25px 25px;
  display: flex;
  flex-direction: column;
  // If business card or legal terms are on screen, blur content:
  filter: ${p => p.theme.blurForTempContent && p.theme.blur};
  
  // overflow: auto; // Needed by desktop Chrome for no known reason
`;
