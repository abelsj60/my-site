import styled from 'styled-components';
import { isIE } from 'react-device-detect';

export default styled.section`
  margin: 25px 0px 25px ${p => !p.saveSerifs ? '25px' : '23px'};
  display: flex;
  flex-direction: column;
  // If business card or legal terms are on screen, blur content:
  filter: ${p => p.theme.blurForTempContent && p.theme.blur};
  // Width runs forever right in IE w/o this.
  ${isIE && 'overflow: auto;'};
`;
