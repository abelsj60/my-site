import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import {
  isMobile
} from 'react-device-detect';

const FullPage = styled.div`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.pink};
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`;
const Text = styled.p`
  margin-left: 25px;
  margin-right: 25px;
  color: ${p => p.theme.colors.yellow};
  font-size: ${p => p.theme.fontSizes.sixteen};
`;

// This component will NOT be shown if the site's zoomed.
// I.e., if the user zooms, and twirls on a small device,
// the zoomed site will show if landscape's re-entered.

// Importantly, if the app's twirled when this component is
// active, the regular site will be seen in portrait...

// This is allowed by the following test in handleResize:
//  -this.state.pinchZoomed && !this.state.tooNarrow

export default function(props) {
  const {
    pathname,
    search
  } = window.location;
  const { tooNarrow } = props;

  if (!isMobile || !tooNarrow) {
    return null;
  }

  ReactGA.event({
    category: 'App state',
    action: 'Screen too narrow',
    label: `Page: ${pathname}${search}`
  });

  return (
    <FullPage>
      <Text>
        Uh-oh. It's a little narrow in here. Try rotating your screen...
      </Text>
    </FullPage>
  );
}
