import styled from 'styled-components';
import { isIE } from 'react-device-detect';

export default styled.section`
  margin: 18px 0px 18px ${p => !p.saveSerifs ? '25px' : '23px'};
  display: flex;
  flex-direction: column;
  // If tempContent is on screen, blur content:
  filter: ${p => p.theme.blurForTempContent && p.theme.blur};
  // Width runs forever right in IE w/o this.
  ${isIE && 'overflow: auto;'};

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    margin: 25px 0px 25px ${p => !p.saveSerifs ? '25px' : '23px'};
  }

  // Don't blur content when header menu is hidden due to expanding screen
  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    filter: ${p => p.theme.isHeaderMenu && 'unset'}
  }
`;
