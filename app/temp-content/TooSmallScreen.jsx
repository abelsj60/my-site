import React from 'react';
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

// This component will NOT be show if the site's zoomed.
// I.e., if the user zooms, and twirls on a small device,
// the zoom will show through.

// We can block by adding:
//  this.narrowGuard =
//    isMobile
//      && window.innerWidth <= 320;
// to App.jsx and
//   '&& !this.narrowGuard'
// to if (this.state.pinchZoomed) in handleResize.

// But, this introduces new scaling problems as the
// message can be unnaturally large in landscape, and
// we'll resize w/the wrong height in portrait.

export default function() {
  const height =
    isMobile
      ? document.documentElement.clientHeight
      : window.innerHeight;

  if (
    !isMobile
      || height > 320
  ) {
    return null;
  }

  return (
    <FullPage>
      <Text>Uh-oh. It's a little narrow in here. Try rotating your screen...</Text>
    </FullPage>
  );
}
