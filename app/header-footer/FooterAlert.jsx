import React from 'react';
import styled from 'styled-components';

const AlertText = styled.p`
  display: ${p => !p.footerAlert && 'none'};
  margin-bottom: 0px;
  margin-left: 25px;
  color: ${p => !p.isHome ? p.theme.colors.pink : p.theme.colors.white};
  z-index: ${p => p.isHome && '1'};
`;

export default function FooterAlert(props) {
  const { currentCaller, footerAlert } = props.appState;
  const isHome = currentCaller === 'home';

  return (
    <AlertText
      isHome={isHome}
      footerAlert={footerAlert}
    >
      ⚠️ Slide up slowly to use these buttons!
    </AlertText>
  );
}
